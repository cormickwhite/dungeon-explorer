export type Class =
  | "barbarian"
  | "bard"
  | "cleric"
  | "druid"
  | "fighter"
  | "monk"
  | "paladin"
  | "ranger"
  | "rogue"
  | "sorcerer"
  | "warlock"
  | "wizard";

export type Race =
  | "dwarf"
  | "elf"
  | "halfling"
  | "human"
  | "dragonborn"
  | "gnome"
  | "half-elf"
  | "half-orc"
  | "tiefling";

export type School =
  | "abjuration"
  | "conjuration"
  | "divination"
  | "enchantment"
  | "evocation"
  | "illusion"
  | "necromancy"
  | "transmutation";

export type CastingTime =
  | "instantaneous"
  | "1 action"
  | "1 bonus action"
  | "1 reaction"
  | "1 minute"
  | "10 minutes"
  | "1 hour"
  | "8 hours"
  | "12 hours"
  | "24 hours"
  | "conditional";

export type Ability =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export type Range = "self" | "touch" | "sight";

export type DamageType =
  | "acid"
  | "bludgeoning"
  | "cold"
  | "fire"
  | "force"
  | "lightning"
  | "necrotic"
  | "piercing"
  | "poison"
  | "psychic"
  | "radiant"
  | "slashing"
  | "thunder"
  | "shortbow"
  | "longbow"
  | "one-handed melee attacks"
  | "unarmed attacks"
  | "natural attacks"
  | "melee weapon attacks";

export type Condition =
  | "blinded"
  | "charmed"
  | "deafened"
  | "exhaustion"
  | "frightened"
  | "grappled"
  | "incapacitated"
  | "invisible"
  | "paralyzed"
  | "petrified"
  | "poisoned"
  | "prone"
  | "restrained"
  | "stunned"
  | "unconscious";

export type AreaOfEffect = "cone" | "cube" | "cylinder" | "line" | "sphere";

export type SpellDataTable = {
  title: string;
  fields: string[];
  rows: any[];
};

export type Spell = {
  id: string;
  name: string;
  description: string;
  class: Class[];
  level: number;
  school: School;
  casting_time: CastingTime;
  duration: CastingTime;
  area_of_effect_shape?: AreaOfEffect;
  area_of_effect_size_in_feet?: number;
  range?: Range;
  range_in_feet?: number;
  save?: Ability;
  damage_type?: DamageType[];
  conditions?: Condition[];
  verbal_component: boolean;
  somatic_component: boolean;
  material_component: boolean;
  materials?: string[];
  concentration: boolean;
  ritual: boolean;
  data_table?: SpellDataTable;
};

export type Character = {
  id: string;
  name: string;
  class: Class;
  level: number;
  race: Race;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};
