import { keyframes, styled, useTheme } from '@mui/material';
import React from 'react';
import './neon.css';

export interface LedLetterProps {
  letter: string;
  animation_speed_ms: number;
  speed_variance_ms: number;
  delay_ms: number;
  delay_randomness_ms: number;
}

const flicker = keyframes`
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: .99;
		
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
	}
`

const turn_on_animation = keyframes`
  19.999%, 22%, 62.999%, 64%, 64.999%, 70%, to {
    opacity: .99;
    text-shadow: 0 0 2px #fff, 0 0 4px var(--neon-text-shadow);
  }
  0%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
  }
`

const FlickeringLights = styled('span')<{flickeringProps: {
  duration: string,
  startTime: string,
}}>(({ flickeringProps }) => {
  const theme = useTheme();
  
  return {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--neon-text-color)',
    textTransform: 'uppercase',
    textShadow:
      `-2px -2px 8px var(--neon-text-shadow),
      2px 2px 8px var(--neon-text-shadow),
      0 0 16px var(--neon-text-shadow);`,
    // animation: `${flicker} 1s linear`,
    // WebkitAnimation: `${flicker} 1s linear`,
    // MozAnimation: `${flicker} 1s linear`,
    // OAnimation: `${flicker} 1s linear`,
    animation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 forwards`,
    WebkitAnimation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 forwards`,
    MozAnimation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 forwards`,
    OAnimation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 fowards`,
    opacity: 0.3,
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '5rem',
    },
  }
});

export default function LedLetter(props: LedLetterProps) {
  const speed_randomness = Math.floor(Math.random() * props.speed_variance_ms);
  const delay_randomness = Math.floor(Math.random() * props.delay_randomness_ms);
  const animation_speed_ms = speed_randomness + props.animation_speed_ms;
  const delay_ms = delay_randomness + props.delay_ms;

  const flickeringProps = {
    duration: `${animation_speed_ms}ms`,
    startTime: `${delay_ms}ms`
  }
  return (
    <FlickeringLights flickeringProps={flickeringProps}>
      {props.letter}
    </FlickeringLights>
  );
}
