const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNum = () => {
    // Generate Number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber
}

btn.addEventListener("click", generateNum);

generateNum();