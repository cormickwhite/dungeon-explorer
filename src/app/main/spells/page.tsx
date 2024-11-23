import { SpellTableFilter } from "../../components/table-filter";
import SpellTable from "../../components/spell-table";

export default async function Spells({
  searchParams,
}: {
  searchParams?: {
    characterClass?: string;
    spellLevel?: string;
    spellName?: string;
    // page?: string;
  };
}) {
  const characterClass = searchParams?.characterClass || "";
  const spellLevel = searchParams?.spellLevel || "";
  const spellName = searchParams?.spellName || "";
  // const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <SpellTableFilter />
      <SpellTable
        query={{
          characterClass: characterClass,
          spellLevel: spellLevel,
          spellName: spellName,
        }}
      />
    </>
  );
}
