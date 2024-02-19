import React from "react";
import { Grid } from "@mui/material";

export default function Welcome() {
  return (
    <div
      className="min-h-screen w-full bg-gray-200"
      // To add a backdrop
      // style={{
      //   backgroundImage: `url(${vegasImage.src})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <Grid
        container
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
    </div>
  );
}
