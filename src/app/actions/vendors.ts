"use server";

import { prisma } from "@/lib/prisma";

export async function getVendors({
  city,
  category,
  q,
}: {
  city?: string;
  category?: string;
  q?: string;
}) {
  const where: any = {};

  if (city) where.city = { contains: city, mode: "insensitive" };
  if (q) where.name = { contains: q, mode: "insensitive" };
  if (category) where.category = category;

  const vendors = await prisma.vendor.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return vendors;
}
