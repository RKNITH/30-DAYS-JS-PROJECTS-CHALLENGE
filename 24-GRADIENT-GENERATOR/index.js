// script.js
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const directionValue = document.getElementById('directionValue');
const gradientType = document.getElementById('gradientType');
const gradientPreview = document.getElementById('gradientPreview');
const cssCode = document.getElementById('cssCode');

function updateGradient() {
    const colorValue1 = color1.value;
    const colorValue2 = color2.value;
    const directionValueText = `${direction.value}deg`;
    const type = gradientType.value;
    let gradient;

    if (type === 'linear') {
        gradient = `linear-gradient(${directionValueText}, ${colorValue1}, ${colorValue2})`;
    } else {
        gradient = `radial-gradient(circle, ${colorValue1}, ${colorValue2})`;
    }

    gradientPreview.style.background = gradient;
    cssCode.value = `background: ${gradient};`;
    directionValue.textContent = directionValueText;
}

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
direction.addEventListener('input', updateGradient);
gradientType.addEventListener('change', updateGradient);

window.addEventListener('load', updateGradient);
