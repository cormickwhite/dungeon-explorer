"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

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

  const [spellName, setSpellName] = useState(
    searchParams.get("spellName")?.toString() ?? ""
  );

  const handleSpellNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSpellName(value);
  };

  let spellLevelMenu = [
    <MenuItem value="" key="none">
      none
    </MenuItem>,
    <MenuItem value="0" key="0">
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

  const handleClear = () => {
    setSpellName("");
    setSpellLevel("");
    setCharacterClass("");
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    // params.set("page", "1");

    characterClass
      ? params.set("characterClass", characterClass)
      : params.delete("characterClass");

    spellLevel
      ? params.set("spellLevel", spellLevel)
      : params.delete("spellLevel");

    spellName ? params.set("spellName", spellName) : params.delete("spellName");

    replace(`${pathname}?${params.toString()}`);
  }, [characterClass, spellLevel, spellName]);

  return (
    <>
      <Grid container spacing={2} alignItems="center" sx={{ padding: 2 }}>
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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="class-spell-level-label">Max Level</InputLabel>
              <Select
                labelId="max-level-select-label"
                id="max-level-select"
                value={spellLevel}
                label="Max Level"
                onChange={handleSpellLevelChange}
              >
                {spellLevelMenu}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ maxWidth: 120 }}>
            <FormControl>
              <TextField
                id="spell-name"
                label="Spell Name"
                variant="outlined"
                value={spellName}
                onChange={handleSpellNameChange}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Button variant="outlined" size="large" onClick={handleClear}>
              Clear
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
