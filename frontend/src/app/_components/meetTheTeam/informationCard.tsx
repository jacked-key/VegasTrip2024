import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export interface InformationCardProps {
  fun_fact: string;
  most_excited: string;
  throw_up: string;
}

export default function InformationCard(props: InformationCardProps) {
  return (
    <Card
      sx={{
        width: '80%',
        height: '100%',
      }}
    >
      <CardHeader title="Fun Fact:" subheader={props.fun_fact} />
      <CardHeader
        title="What are you most excited to do in Vegas:"
        subheader={props.fun_fact}
      />
      <CardHeader
        title="Will you throw up on this trip?:"
        subheader={
          props.throw_up === 'yes'
            ? '🤮'
            : props.throw_up === 'no'
              ? '🍻🍺🥂'
              : '🤷🏼‍♂️'
        }
      />
    </Card>
  );
}
