// conditional isVowel
function isVowel(S) {
    let result;
    result = S == "a" || S == "e" || S == "i" || S == "o" || S == "u";
    return result;
}

// conditional sortir
function sortCharacter(word) {
    let sanitizeWord = word.toLowerCase().trim().replace(/\s+/g, "").split("");
    let vowelChars = [];
    let consonantChars = [];
    for (let i = 0; i < sanitizeWord.length; i++) {
        if (isVowel(sanitizeWord[i])) {
            let lastIndexChar = vowelChars.lastIndexOf(sanitizeWord[i]);
            if (lastIndexChar < 0) {
                vowelChars.push(sanitizeWord[i]);
            } else {
                vowelChars.splice(lastIndexChar + 1, 0, sanitizeWord[i]);
            }
        } else {
            let lastIndexChar = consonantChars.lastIndexOf(sanitizeWord[i]);
            if (lastIndexChar < 0) {
                consonantChars.push(sanitizeWord[i]);
            } else {
                consonantChars.splice(lastIndexChar + 1, 0, sanitizeWord[i]);
            }
        }
    }
    return `Vowel Characters : ${vowelChars.join("")}\nConsonant Characters : ${consonantChars.join("")}\n`;
}


console.log(sortCharacter("Sample Case"));
console.log(sortCharacter("Next Case"));