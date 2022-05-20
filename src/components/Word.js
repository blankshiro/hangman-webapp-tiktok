import React from "react";

const Word = ({ generatedWord, correctLetters }) => {
    return (
        <div className="word">
            {generatedWord.split("").map((letter, index) => {
                return (
                    <span className="letter" key={index}>
                        {correctLetters.includes(letter) ? letter : "_"}
                    </span>
                );
            })}
        </div>
    );
};

export default Word;
