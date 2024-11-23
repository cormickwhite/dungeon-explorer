import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import { Character, Spell } from "./definitions";

export async function fetchSpells(query: any) {
  const { characterClass, spellLevel, spellName } = query;

  if (characterClass && spellName) {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE
        level <= ${spellLevel ? spellLevel : 20} AND
        ${characterClass} = ANY(spells.class) AND
        name ILIKE ${`%${spellName}%`};
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
  } else if (characterClass) {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE
        level <= ${spellLevel ? spellLevel : 20} AND
        ${characterClass} = ANY(spells.class);
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
  } else if (spellName) {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE name ILIKE ${`%${spellName}%`} AND
      level <= ${spellLevel ? spellLevel : 20}
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
  } else {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE level <= ${spellLevel ? spellLevel : 20}
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
  }
}

export async function fetchCharacters() {
  try {
    const data = await sql<Character>`SELECT * FROM characters`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch character data.");
  } finally {
    revalidatePath("/main/characters");
  }
}
