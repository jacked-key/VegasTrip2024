'use client';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import '../_css/homepage.css';
import LedSign from './meetTheTeam/ledSign/ledSign';
import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';

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

  const theme = useTheme();

  return (
    <Grid
      container
      spacing={0}
      justifyContent={'center'}
      alignItems={'center'}
      className="min-h-screen w-full"
      style={{
        animation: `brighten ${PROPERTIES.initial_animation_duration_ms+1000}ms cubic-bezier(.95,.05,.8,.04)`,
        WebkitAnimation: `brighten ${PROPERTIES.initial_animation_duration_ms+1000}ms cubic-bezier(.95,.05,.8,.04)`,
        MozAnimation: `brighten ${PROPERTIES.initial_animation_duration_ms+1000}ms cubic-bezier(.95,.05,.8,.04)`,
      }}
    >
      <Grid
        item
        container
        xs={12}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <LedSign word="What happens in Vegas" general_delay_char={0} />
        </Grid>
        <Grid item xs={3}>
          <LedSign word="Stays in Vegas" general_delay_char={21} />
        </Grid>
      </Grid>
      {firstAnimationLoaded && (
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={10}
          lg={8}
          xl={8}
          alignItems="center"
          justifyContent={'center'}
          textAlign={'center'}
        >
          <Grid
            item
            className="rounded-t-full bg-white shadow-inner"
            xs={12}
            sx={{
              marginTop: '-4rem',
              height: '4rem',
              '@media (min-width:600px)': { // Breakpoint at 600px width and above
                marginTop: '-4rem', // Adjust margin for larger screens
                height: '4rem', // Adjust height for larger screens
              },
              '@media (min-width:960px)': { // Breakpoint at 960px width and above
                marginTop: '-8rem', // Adjust margin for even larger screens
                height: '8rem', // Adjust height for even larger screens
              },
              '@media (min-width:1280px)': { // Breakpoint at 960px width and above
                marginTop: '-8rem', // Adjust margin for even larger screens
                height: '8rem', // Adjust height for even larger screens
              },
              '@media (min-width:1920px)': { // Breakpoint at 960px width and above
                marginTop: '-8rem', // Adjust margin for even larger screens
                height: '8rem', // Adjust height for even larger screens
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: '2rem',
                '@media (min-width:600px)': { // Breakpoint at 600px width and above
                  fontSize: '2rem',
                },
                '@media (min-width:960px)': { // Breakpoint at 960px width and above
                  fontSize: '4rem',
                },
                '@media (min-width:1280px)': { // Breakpoint at 960px width and above
                  fontSize: '4rem',
                },
                '@media (min-width:1920px)': { // Breakpoint at 960px width and above
                  fontSize: '6rem',
                },
              }}
            >
              Meet The Team
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
