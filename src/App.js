import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import Mistakes from "./components/Mistakes";
import Word from "./components/Word";
import randomWords from "random-words";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import Keyboard from "./components/Keyboard";
import { isMobile } from "react-device-detect";

import { showNotification as notify } from "./helpers/notification";
import "./App.css";

let generatedWord = randomWords();
console.log(generatedWord);

function App() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const validateKey = (key) => {
        const letter = key.toLowerCase();
        if (generatedWord.includes(letter)) {
            // if yes, add letter to correctLetters or check if game is won
            if (!correctLetters.includes(letter)) {
                // add current letter to correctLetters
                setCorrectLetters((correctLetters) => [...correctLetters, letter]);
            } else {
                notify(setShowNotification);
            }
            // if no, add letter to wrongLetters or check if game is lost
        } else {
            if (!wrongLetters.includes(letter) & (wrongLetters.length < 6)) {
                // add current letter to wrongLetters
                setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
            } else {
                notify(setShowNotification);
            }
        }
    };

    useEffect(() => {
        console.log(isMobile);
        const handleKeydown = (event) => {
            const { key, keyCode } = event;
            // if playable state and key is a letter
            if (playable && keyCode >= 65 && keyCode <= 90) {
                validateKey(key);
            }
        };

        // listen for keypress and pass it to handleKeydown function

        if (!isMobile) {
            window.addEventListener("keydown", handleKeydown);

            // return function to remove event listener
            return () => window.removeEventListener("keydown", handleKeydown);
        } else {
        }
    }, [correctLetters, wrongLetters, playable]); // dependencies

    function playAgain() {
        // set playable state to true
        setPlayable(true);
        // reset correctLetters array
        setCorrectLetters([]);
        // reset wrongLetters array
        setWrongLetters([]);
        // generate new word
        generatedWord = randomWords();
    }

    return (
        <div>
            <Header />
            <div>
                <Figure wrongLetters={wrongLetters} />
                <Mistakes wrongLetters={wrongLetters} />
                <Word generatedWord={generatedWord} correctLetters={correctLetters} />
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} generatedWord={generatedWord} setPlayable={setPlayable} playAgain={playAgain} />
            <Notification showNotification={showNotification} />

            {isMobile && <br />}
            {isMobile && <Keyboard keyPress={validateKey} />}
        </div>
    );
}
export default App;
