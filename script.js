let fruits = [
    "banana", "strawberries", "blueberries", "blackberries", "watermelon",
    "melons", "apples", "cranberries", "grapes", "pineapple"
];

function generate() {
    let visitorName = document.getElementById("visitorName").value;
    let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    let outputElement = document.getElementById("output");
    outputElement.textContent = `${visitorName}, you should eat ${randomFruit} today!`;

    restyle(outputElement);
}

function restyle(element) {
    element.style.color = getRandomColor();
    element.style.fontSize = getRandomFontSize();
    element.style.backgroundColor = getRandomBackgroundColor();
}

function getRandomColor() {
    let colors = ["red", "blue", "green", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomFontSize() {
    let fontSizes = ["16px", "20px", "24px", "28px"];
    return fontSizes[Math.floor(Math.random() * fontSizes.length)];
}

function getRandomBackgroundColor() {
    let backgrounds = ["lightyellow", "lightblue", "lightgreen"];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random