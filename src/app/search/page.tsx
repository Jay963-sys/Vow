import VendorCard from "@/components/VendorCard";
import SearchPageClient from "@/components/SearchPageClient";
import { getVendors } from "@/app/actions/vendors";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; category?: string; q?: string }>;
}) {
  const { city, category, q } = await searchParams;
  const vendors = await getVendors({ city, category, q });

  return (
    <SearchPageClient vendors={vendors} city={city} category={category} q={q} />
  );
}
