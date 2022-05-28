import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Stack";
import "../App.css";

export default function Keyboard(props) {
    /* if not using qwerty format
  const alphaLength = Array.from(Array(26).keys());
  const alphabet = alphaLength.map((x) => String.fromCharCode(x + 65));

  alphabet.map((letter, index) => {
    index === 0 && console.log(letter);
  });
  */
    const alphabet = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div>
            <Stack spacing={1.5} direction="row" justifyContent="center" alignItems="center">
                {alphabet.map((letter, index) => {
                    return (
                        index < 10 && (
                            <button className="button" key={letter} onClick={() => props.keyPress(letter)}>
                                {letter}
                            </button>
                        )
                    );
                })}
            </Stack>
            <br />
            <Stack spacing={1.5} direction="row" justifyContent="center" alignItems="center">
                {alphabet.map((letter, index) => {
                    return (
                        index >= 10 &&
                        index < 19 && (
                            <button className="button" key={letter} onClick={() => props.keyPress(letter)}>
                                {letter}
                            </button>
                        )
                    );
                })}
            </Stack>
            <br />
            <Stack spacing={1.5} direction="row" justifyContent="center" alignItems="center">
                {alphabet.map((letter, index) => {
                    return (
                        index >= 19 && (
                            <button className="button" key={letter} onClick={() => props.keyPress(letter)}>
                                {letter}
                            </button>
                        )
                    );
                })}
            </Stack>
            <br />
        </div>
    );
}
