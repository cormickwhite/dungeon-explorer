import { SpellTableFilter } from "../../components/table-filter";
import SpellTable from "../../components/spell-table";
import TablePagination from "../../components/table-pagination";

import { fetchSpellCount } from "../../lib/data";

export default async function Spells({
  searchParams,
}: {
  searchParams?: {
    characterClass?: string;
    spellLevel?: string;
    spellName?: string;
    page?: string;
  };
}) {
  const characterClass = searchParams?.characterClass || "";
  const spellLevel = searchParams?.spellLevel || "";
  const spellName = searchParams?.spellName || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalSpellCount = await fetchSpellCount();

  return (
    <>
      <SpellTableFilter />
      <SpellTable
        query={{
          characterClass: characterClass,
          spellLevel: spellLevel,
          spellName: spellName,
          page: currentPage,
        }}
      />
      <TablePagination totalCount={totalSpellCount} />
    </>
  );
}
