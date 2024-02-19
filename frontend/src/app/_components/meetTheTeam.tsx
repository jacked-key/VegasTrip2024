import { Box, Container, Grid } from "@mui/material";
import React from "react";
export default function MeetTheTeam() {
  return (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item xs={12}>
        <Container
          sx={{
            width: "100%",
            bgcolor: "red", //TODO theme?
          }}
        >
          Meet The Team
        </Container>
      </Grid>
      <Grid>Bottom</Grid>
    </Grid>
  );
}
