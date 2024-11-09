import { SpellTableFilter } from "../../components/table-filter";
import SpellTable from "../../components/spell-table";

export default async function Spells({
  searchParams,
}: {
  searchParams?: {
    characterClass?: string;
    // page?: string;
  };
}) {
  const characterClass = searchParams?.characterClass || "";
  // const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <SpellTableFilter />
      <SpellTable query={{ characterClass: characterClass }} />
    </>
  );
}
