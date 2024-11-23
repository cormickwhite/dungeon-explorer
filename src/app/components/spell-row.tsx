"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Spell } from "../lib/definitions";

export default function SpellRow(props: { row: Spell }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const buildComponentsString = () => {
    let componentsArray = [];
    if (row.verbal_component) {
      componentsArray.push("verbal");
    }
    if (row.somatic_component) {
      componentsArray.push("somatic");
    }
    if (row.material_component) {
      componentsArray.push("material");
    }

    if (componentsArray.length === 0) {
      return "None";
    } else if (componentsArray.length === 1) {
      return componentsArray[0];
    } else if (componentsArray.length === 2) {
      return componentsArray.join(" and ");
    } else {
      return (
        componentsArray.slice(0, -1).join(", ") +
        ", and " +
        componentsArray.slice(-1)
      );
    }
  };

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
        <TableCell>{row.level}</TableCell>
        <TableCell>{row.class.join(", ")}</TableCell>
        <TableCell>{row.damage_type}</TableCell>
        <TableCell>{row.save}</TableCell>
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
                  <Typography>type: {row.type}</Typography>
                  {row.area_of_effect_range_in_feet && (
                    <Typography>
                      range: {row.area_of_effect_range_in_feet} ft.
                    </Typography>
                  )}
                  {row.area_of_effect_shape && (
                    <Typography>shape: {row.area_of_effect_shape}</Typography>
                  )}
                </Grid>
                <Grid item>
                  {row.conditions && (
                    <Typography>
                      conditions: {row.conditions?.join(", ")}
                    </Typography>
                  )}
                  <Typography>
                    duration: {row.concentration && "Concentration, up to "}
                    {row.duration}
                  </Typography>
                  <Typography>school: {row.school}</Typography>
                  <Typography>casting time: {row.casting_time}</Typography>
                </Grid>
                <Grid item>
                  <Typography>ritual: {row.ritual ? "yes" : "no"}</Typography>
                  <Typography>components: {buildComponentsString()}</Typography>
                  {row.materials && (
                    <Typography>
                      materials: {row.materials.join(", ")}
                    </Typography>
                  )}
                </Grid>
              </Grid>

              <Typography gutterBottom sx={{ marginLeft: 4, marginRight: 4 }}>
                {row.description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
