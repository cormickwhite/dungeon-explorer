import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import SpellRow from "./spell-row";

import { fetchSpells } from "../lib/data";

import { Spell } from "../lib/definitions";

export default async function SpellTable(props: { query: any }) {
  const spells = await fetchSpells(props.query);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>name</TableCell>
            <TableCell>level</TableCell>
            <TableCell>class</TableCell>
            <TableCell>damage</TableCell>
            <TableCell>save</TableCell>
          </TableRow>
        </TableHead>
        {spells.length < 1 && (
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell>
                <Stack direction="row" alignItems="center" gap={1}>
                  none spells <SentimentVeryDissatisfiedIcon />
                </Stack>
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableBody>
        )}
        {spells.length > 0 && (
          <TableBody>
            {spells.map((row: Spell) => (
              <SpellRow key={row.name} row={row} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
