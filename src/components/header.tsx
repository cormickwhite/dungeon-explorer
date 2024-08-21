import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

export default function Header() {
  return (
    <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoFixHighIcon
            fontSize="large"
            color="secondary"
            sx={{ marginRight: 6 }}
          />
          <Button
            href="/main/spells"
            LinkComponent={Link}
            color="secondary"
            size="large"
          >
            Spells
          </Button>
          <Button
            href="/main/characters"
            LinkComponent={Link}
            color="secondary"
            size="large"
          >
            Characters
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
