export function checkWin(correctLetters, wrongLetters, generatedWord) {
    let status = "win";

    // check if all letters in generatedWord is in correctLetters
    generatedWord.split("").forEach((letter) => {
        if (!correctLetters.includes(letter)) {
            status = "";
        }
    });

    // if length of wrongLetters is 6, the game is lost
    if (wrongLetters.length === 6) {
        status = "lose";
    }

    return status;
}
