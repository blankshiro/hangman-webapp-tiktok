import React, { useEffect } from "react";
import { checkWin } from "../helpers/checker";

const Popup = ({ correctLetters, wrongLetters, generatedWord, setPlayable, playAgain }) => {
    let message = "";
    let reveal = "";
    let revealWord = "";
    let end = "";
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, generatedWord) === "win") {
        message = "You won!";
        end = "Congratulations!";
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, generatedWord) === "lose") {
        message = "You lost. Try again!";
        reveal = `The word was `;
        revealWord = `${generatedWord}`;
        end = `.`;
        playable = false;
    }

    useEffect(() => {
        setPlayable(playable);
    });

    return (
        // if status is not empty, show popup by changing the display from none to flex
        <div className="popup-container" style={message !== "" ? { display: "flex" } : {}}>
            <div className="popup">
                <h4>{message}</h4>
                <div>
                    <p className="d-inline">{reveal}</p>
                    <p className="d-inline text-decoration-underline fw-bold">{revealWord}</p>
                    <p className="d-inline">{end}</p>
                </div>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
};

export default Popup;
