import SpellTable from "../../components/spell-table";

import { fetchSpells } from "../../lib/data";

export default async function Spells() {
  const spells = await fetchSpells();

  return <SpellTable spells={spells} />;
}
