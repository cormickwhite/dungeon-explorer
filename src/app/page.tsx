import NextLink from "next/link";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "sm" }}>
          <Button variant="contained" component={NextLink} href="/main/spells">
            explore dungeons
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
