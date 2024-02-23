import { keyframes, styled } from "@mui/material";
import React from "react";

export interface LedLetterProps {
  letter: string;
}

const blink = keyframes`
  70% {
    opacity: 0.7;
  }
`;
const flicker = keyframes`
  40% {
    opacity: 0.8;
  }
  42% {
    opacity: 0.1;
  }
  43% {
    opacity: 0.8;
  }
  45% {
    opacity: 0.1;
  }
  46% {
    opacity: 0.8;
  }
`;

const FlickeringLights = styled("span")<{
  startTime: string;
  blinkNumber: number;
}>(({ startTime, blinkNumber }) => ({
  fontSize: "5rem",
  fontWeight: 700,
  fontStyle: "italic",
  color: "#ffdfdf",
  textTransform: "uppercase",
  textShadow:
    "-0.2rem -0.2rem 1rem #ff4107, 0.2rem 0.2rem 1rem #ff4107, 0 0 2rem var(--neon-text-color)",
  animation: `${blink} 0.01s ${startTime} ${blinkNumber} alternate`,
  WebkitAnimation: `${blink} 0.01s ${startTime} ${blinkNumber} alternate`,
  MozAnimation: `${blink} 0.01s ${startTime} ${blinkNumber} alternate`,
  OAnimation: `${blink} 0.01s ${startTime} ${blinkNumber} alternate`,
}));

export default function LedLetter(props: LedLetterProps) {
  const randomNumber = Math.floor(Math.random() * 2001);
  return (
    <FlickeringLights startTime={`${randomNumber}ms`} blinkNumber={3}>
      {props.letter}
    </FlickeringLights>
  );
}
