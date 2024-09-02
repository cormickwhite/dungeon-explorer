import CharacterTable from "../../components/character-table";

import { fetchCharacters } from "../../lib/data";

export default async function Characters() {
  const characters = await fetchCharacters();

  return <CharacterTable characters={characters} />;
}
