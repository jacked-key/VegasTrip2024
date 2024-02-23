import React from "react"
import LedLetter from "./ledLetter";

export interface LedSignProps {
  word: string;
}

export default function LedSign(props: LedSignProps) {
  return (
    <div>
      {
        props.word.split('').map((letter, index) => (
          <LedLetter letter={letter}/>
        ))
      }
    </div>
  ) 
} 