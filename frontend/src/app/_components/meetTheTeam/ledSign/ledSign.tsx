import React from "react";
import LedLetter from "./ledLetter";

export interface LedSignProps {
  word: string;
  general_delay_char: number;
}

export default function LedSign(props: LedSignProps) {
  return (
    <div>
      {props.word.split("").map((letter, index) => (
        <LedLetter
          letter={letter}
          key={index}
          animation_speed_ms={750}
          speed_variance_ms={250}
          delay_ms={props.general_delay_char * 75 + 500 + 75 * index}
          delay_randomness_ms={250}/>
      ))}
    </div>
  );
}
