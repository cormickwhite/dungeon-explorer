"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { Character } from "../lib/definitions";

function CharacterRow(props: { row: Character }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.class}</TableCell>
        <TableCell>{row.level}</TableCell>
        <TableCell>{row.race}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid
                container
                justifyContent="space-evenly"
                sx={{ marginBottom: 2 }}
              >
                <Grid item>
                  <Typography>strength: {row.strength}</Typography>
                  <Typography>dexterity: {row.dexterity}</Typography>
                </Grid>
                <Grid item>
                  <Typography>constitution: {row.constitution}</Typography>
                  <Typography>intelligence: {row.intelligence}</Typography>
                </Grid>
                <Grid item>
                  <Typography>wisdom: {row.wisdom}</Typography>
                  <Typography>charisma: {row.charisma}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CharacterTable(props: { characters: Character[] }) {
  const { characters } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>name</TableCell>
            <TableCell>class</TableCell>
            <TableCell>level</TableCell>
            <TableCell>race</TableCell>
          </TableRow>
        </TableHead>
        {characters.length < 1 && (
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell>
                <Stack direction="row" alignItems="center" gap={1}>
                  none characters <SentimentVeryDissatisfiedIcon />
                </Stack>
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableBody>
        )}
        {characters.length > 0 && (
          <TableBody>
            {characters.map((row: Character) => (
              <CharacterRow key={row.name} row={row} />
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
