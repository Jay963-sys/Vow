import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.vendor.create({
    data: {
      name: "Lagos Lens Photography",
      slug: "lagos-lens",
      city: "Lagos",
      priceTier: 2,
      category: "PHOTOGRAPHER",
      description:
        "Capturing moments that last a lifetime. Specializing in traditional and white weddings.",
      coverImage:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      gallery: [],
      instagram: "@lagoslens",
    },
  });

  await prisma.vendor.create({
    data: {
      name: "The Grand Hall",
      slug: "grand-hall-ikeja",
      city: "Ikeja",
      priceTier: 3,
      category: "VENUE",
      description: "A 500-capacity hall with full AC and ample parking.",
      coverImage:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
      gallery: [],
    },
  });

  console.log("🌱 Seeding complete");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
