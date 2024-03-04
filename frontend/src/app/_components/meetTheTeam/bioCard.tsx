import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export interface BioCardProps {
  name: string;
  who_are_you: string;
}
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BioCard(props: BioCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        width: '60%',
      }}
    >
      <CardMedia
        sx={{ height: 240 }}
        image={require('../../_team/LebronJames.jpeg').default.src}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          h{bull}ell{bull}o
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.who_are_you}
        </Typography>
      </CardContent>
    </Card>
  );
}
