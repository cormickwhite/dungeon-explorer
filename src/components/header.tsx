import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InfoIcon from "@mui/icons-material/Info";

export default function Header() {
  const legalNotice =
    "This work includes material taken from the System Reference Document 5.1 by Wizards of the Coast LLC, available ";
  const legalLink =
    "https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf";

  const testText = (
    <>
      {legalNotice}
      <MuiLink
        href={legalLink}
        target="_blank"
        rel="noreferrer"
        color="secondary"
      >
        here
      </MuiLink>
    </>
  );

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
          <Tooltip title={testText}>
            {/* <Tooltip title={legalDisclaimer}> */}
            <InfoIcon
              fontSize="large"
              color="secondary"
              sx={{ marginLeft: "auto" }}
            />
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
