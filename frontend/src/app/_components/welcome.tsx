"use client";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "../_css/homepage.css";
import LedSign from "./meetTheTeam/ledSign/ledSign";

const PROPERTIES = {
  initial_animation_duration_ms: 4000,
};

export interface WelcomeProps {
  setLoaded: (loaded: boolean) => void;
}

export default function Welcome(props: WelcomeProps) {
  const [firstAnimationLoaded, setFirstAnimationLoaded] =
    useState<boolean>(false);

  useEffect(() => {
    setFirstAnimationLoaded(false);
    const timeOut = setTimeout(() => {
      setFirstAnimationLoaded(true);
      props.setLoaded(true);
    }, PROPERTIES.initial_animation_duration_ms);
    return () => clearTimeout(timeOut);
  }, []);

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
          <LedSign word="What happens in Vegas" />
        </Grid>
        <Grid item xs={3}>
          <LedSign word="Stays in Vegas" />
        </Grid>
      </Grid>
      {firstAnimationLoaded && (
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
              marginTop: "-8rem",
              height: "8rem",
            }}
            xs={12}
          >
            <h2>Meet The Team</h2>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
