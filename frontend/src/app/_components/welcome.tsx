import React from "react";
import { Grid } from "@mui/material";
import "../_css/homepage.css"

export default function Welcome() {
  return (
    <Grid
      container
      spacing={0}
      justifyContent={"center"}
      alignItems={"center"}
      className="min-h-screen w-full bg-slate-900"
    >
      <Grid
        item
        container
        xs={12}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <div>
            <h1>What happens in Vegas</h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <h1>Stays in Vegas</h1>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={8}
        alignItems="center"
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Grid
          item
          className="rounded-t-full bg-white shadow-inner"
          sx={{
            marginTop: "-20vh",
            height: "20vh",
          }}
          xs={12}
        >
          <h2>
            Meet The Team
          </h2>
        </Grid>
      </Grid>
    </Grid>
  );
}
