-- CreateEnum
CREATE TYPE "Category" AS ENUM ('PHOTOGRAPHER', 'VIDEOGRAPHER', 'VENUE', 'PLANNER', 'MAKEUP_ARTIST', 'DJ');

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "priceTier" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "category" "Category" NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "gallery" JSONB NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "instagram" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_slug_key" ON "Vendor"("slug");
