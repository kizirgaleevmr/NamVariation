import NameVariations from "./name-variations.js";

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    
    const nameVariations = new NameVariations(name.value);
    // Операторы try/catch добавлены для того, чтобы дать возможность тестировать
    // код до момента, когда будут реализованы все методы экземпляра.
    try {
        answer1.textContent = nameVariations.getNumberOfChars();
    } catch (error) {
        console.log(error);
    }

    try {
        answer2.textContent = nameVariations.getLower();
    } catch (error) {
        console.log(error);
    }

    try {
        answer3.textContent = nameVariations.getUpper();
    } catch (error) {
        console.log(error);
    }
});
