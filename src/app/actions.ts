"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password || !name) {
    return { error: "Missing fields" };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: true };
}

export async function createVendorProfile(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "You must be logged in" };
  }

  // Check if they already have a profile
  const existing = await prisma.vendor.findUnique({
    where: { userId: session.user.id },
  });

  if (existing) {
    return { error: "You already have a vendor profile" };
  }

  const name = formData.get("name") as string;
  const city = formData.get("city") as string;
  const category = formData.get("category") as any;
  const priceTier = parseInt(formData.get("priceTier") as string);
  const description = formData.get("description") as string;
  const phone = formData.get("phone") as string;

  if (!name || !city || !description)
    return { error: "Missing required fields" };

  const slug =
    name.toLowerCase().replace(/ /g, "-") +
    "-" +
    Math.floor(Math.random() * 1000);

  try {
    await prisma.vendor.create({
      data: {
        name,
        slug,
        city,
        category,
        priceTier,
        description,
        phone,
        userId: session.user.id,
        coverImage:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
        gallery: [],
      },
    });

    await prisma.user.update({
      where: { id: session.user.id },
      data: { role: "VENDOR" },
    });
  } catch (e) {
    console.error(e);
    return { error: "Failed to create profile" };
  }

  redirect("/vendor/dashboard");
}
