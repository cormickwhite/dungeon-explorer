"use client";

import { useState } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function SpellTableFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (param: string, query: string) => {
    const params = new URLSearchParams(searchParams);
    // params.set("page", "1");
    query ? params.set(param, query) : params.delete(param);

    replace(`${pathname}?${params.toString()}`);
  };

  const [characterClass, setCharacterClass] = useState(
    searchParams.get("characterClass")?.toString() ?? ""
  );

  const handleClassChange = (event: SelectChangeEvent) => {
    setCharacterClass(event.target.value as string);
    handleSearch("characterClass", event.target.value as string);
  };

  return (
    <>
      <Grid container sx={{ padding: 2 }}>
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
      </Grid>
    </>
  );
}
