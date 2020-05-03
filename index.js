let btn = document.getElementById("btn");
let hexText = document.getElementById("hex-text");
let rgbText = document.getElementById("rgb-text");

document.body.style.backgroundColor = "#ffffff";
hexText.textContent = "#ffffff";
rgbText.textContent = "rgb(255, 255, 255)";

btn.addEventListener("click", () => {
    const hex = generateHexColor();
    document.body.style.backgroundColor = hex;

    hexText.textContent = hex;

    const { r, g, b } = hexToRgb(hex);
    rgbText.textContent = `rgb(${r}, ${g}, ${b})`;
});

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