import React from "react";

const Figure = ({ wrongLetters }) => {
    const numOfWrongLetters = wrongLetters.length;
    return (
        <div className="figure-container">
            <div className="top-horizontal"></div>
            <div className="rope-string"></div>
            <div className="rope"></div>
            <div className="left-vertical"></div>
            <div className="bottom-horizontal"></div>
            <div className="right-vertical"></div>
            <div className="figure">
                {numOfWrongLetters > 0 && <div className="figure-1"></div>}
                {numOfWrongLetters > 1 && <div className="figure-2"></div>}
                {numOfWrongLetters > 2 && <div className="figure-3"></div>}
                {numOfWrongLetters > 3 && <div className="figure-4"></div>}
                {numOfWrongLetters > 4 && <div className="figure-5"></div>}
                {numOfWrongLetters > 5 && <div className="figure-6"></div>}
            </div>
        </div>
    );
};

export default Figure;
