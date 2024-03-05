import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export interface BioCardProps {
  name: string;
  who_are_you: string;
}

export default function BioCard(props: BioCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <CardMedia
        sx={{
          top: '0px',
          right: '0px',
          objectFit: "contain",
          height: '120px',
          '@media (min-width:600px)': { // Breakpoint at 600px width and above
            height: '120px', // Adjust height for larger screens
          },
          '@media (min-width:960px)': { // Breakpoint at 960px width and above
            height: '160px', // Adjust height for even larger screens
          },
          '@media (min-width:1280px)': { // Breakpoint at 960px width and above
            height: '200px', // Adjust height for even larger screens
          },
          '@media (min-width:1920px)': { // Breakpoint at 960px width and above
            height: '240px', // Adjust height for even larger screens
          },
        }}
        image={require(`../../_team/${props.name}.jpeg`).default.src}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.who_are_you}
        </Typography>
      </CardContent>
    </Card>
  );
}
