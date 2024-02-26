import { keyframes, styled } from "@mui/material";
import React from "react";
import "./neon.css";

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
    text-shadow: 0 0 1rem #fff, 0 0 2rem var(--neon-text-shadow), 0 0 3rem var(--neon-text-shadow), 0 0 4rem var(--neon-text-shadow), 0 0 5rem var(--neon-text-edge-color), 0 0 6rem var(--neon-text-edge-color), 0 0 7rem var(--neon-text-edge-color), 0 0 8rem var(--neon-text-edge-color), -0.2rem -0.2rem 2rem var(--neon-text-shadow), 0.2rem 0.2rem 2rem var(--neon-text-shadow);
  }
  0%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
    text-shadow: 0 0 1rem var(--neon-text-shadow), 0 0 2rem var(--neon-text-shadow), 0 0 4rem var(--neon-text-edge-color);
  }
`

const FlickeringLights = styled("span")<{flickeringProps: {
  duration: string,
  startTime: string,
}}>(({ flickeringProps }) => ({
  fontSize: "5rem",
  fontWeight: 700,
  color: "var(--neon-text-color)",
  textTransform: "uppercase",
  textShadow:
    `-0.2rem -0.2rem 1rem var(--neon-text-shadow),
     0.2rem 0.2rem 1rem var(--neon-text-shadow),
     0 0 2rem var(--neon-text-shadow);`,
  // animation: `${flicker} 1s linear`,
  // WebkitAnimation: `${flicker} 1s linear`,
  // MozAnimation: `${flicker} 1s linear`,
  // OAnimation: `${flicker} 1s linear`,
  animation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 forwards`,
  WebkitAnimation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 forwards`,
  MozAnimation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 forwards`,
  OAnimation: `${turn_on_animation} ${flickeringProps.duration} ${flickeringProps.startTime} linear 1 fowards`,
  opacity: 0.3,
}));

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
