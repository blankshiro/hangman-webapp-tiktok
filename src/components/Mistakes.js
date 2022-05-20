import React from "react";

const Mistakes = ({ wrongLetters }) => {
    return (
        <div className="wrong-word">
            {wrongLetters.length > 0 ? <span>Wrong:&nbsp;</span> : <span>&nbsp;</span>}
            {wrongLetters.map((letter, index) => (
                <span key={index}>{letter}&nbsp;</span>
            ))}
        </div>
    );
};

export default Mistakes;
