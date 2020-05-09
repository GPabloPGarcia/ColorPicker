function generateHexColor() {
    const baseHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hex = "#";

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * baseHex.length);

        hex += baseHex[random];
    }

    return hex;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

let btn = document.getElementById("btn");
let hexText = document.getElementById("hex-text");
let rgbText = document.getElementById("rgb-text");
let box = document.getElementById("box");
let copy = document.querySelectorAll(".copy");

const initHex = generateHexColor();
const { r, g, b } = hexToRgb(initHex);
const rgb = `rgb(${r}, ${g}, ${b})`;

document.body.style.backgroundColor = initHex;
box.style.border = `4px solid #00${initHex.substr(3, 4)}`;

hexText.textContent = initHex;
hexText.style.color = "#fff";
hexText.style.backgroundColor = initHex;

rgbText.textContent = rgb;
rgbText.style.color = "#fff";
rgbText.style.backgroundColor = rgb;

btn.style.color = "#fff";
btn.style.backgroundColor = initHex;

btn.addEventListener("click", () => {
    const hex = generateHexColor();
    const { r, g, b } = hexToRgb(hex);
    const rgb = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = hex;

    btn.style.backgroundColor = hex;

    hexText.textContent = hex;
    hexText.style.color = "#fff";
    hexText.style.backgroundColor = hex;

    rgbText.textContent = rgb;
    rgbText.style.color = "#fff";
    rgbText.style.backgroundColor = rgb;
});