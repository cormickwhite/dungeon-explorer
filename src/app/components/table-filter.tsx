"use client";

import { useEffect, useState } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function SpellTableFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [characterClass, setCharacterClass] = useState(
    searchParams.get("characterClass")?.toString() ?? ""
  );

  const handleClassChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setCharacterClass(value);
  };

  const [spellLevel, setSpellLevel] = useState(
    searchParams.get("spellLevel")?.toString() ?? ""
  );

  const handleSpellLevelChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setSpellLevel(value);
  };

  let spellLevelMenu = [
    <MenuItem value="" key="none">
      none
    </MenuItem>,
    <MenuItem value="cantrip" key="cantrip">
      cantrip
    </MenuItem>,
  ];
  for (let i = 1; i < 21; i++) {
    spellLevelMenu.push(
      <MenuItem value={i.toString()} key={i}>
        {i}
      </MenuItem>
    );
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    //     // params.set("page", "1");

    characterClass
      ? params.set("characterClass", characterClass)
      : params.delete("characterClass");

    spellLevel
      ? params.set("spellLevel", spellLevel)
      : params.delete("spellLevel");

    replace(`${pathname}?${params.toString()}`);
  }, [characterClass, spellLevel]);

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="class-select-label">Class</InputLabel>
              <Select
                labelId="class-select-label"
                id="class-select"
                value={characterClass}
                label="Class"
                onChange={handleClassChange}
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"barbarian"}>barbarian</MenuItem>
                <MenuItem value={"bard"}>bard</MenuItem>
                <MenuItem value={"cleric"}>cleric</MenuItem>
                <MenuItem value={"druid"}>druid</MenuItem>
                <MenuItem value={"fighter"}>fighter</MenuItem>
                <MenuItem value={"monk"}>monk</MenuItem>
                <MenuItem value={"paladin"}>paladin</MenuItem>
                <MenuItem value={"ranger"}>ranger</MenuItem>
                <MenuItem value={"rogue"}>rogue</MenuItem>
                <MenuItem value={"sorcerer"}>sorcerer</MenuItem>
                <MenuItem value={"warlock"}>warlock</MenuItem>
                <MenuItem value={"wizard"}>wizard</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="class-spell-level-label">Level</InputLabel>
              <Select
                labelId="level-select-label"
                id="level-select"
                value={spellLevel}
                label="Level"
                onChange={handleSpellLevelChange}
              >
                {spellLevelMenu}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
