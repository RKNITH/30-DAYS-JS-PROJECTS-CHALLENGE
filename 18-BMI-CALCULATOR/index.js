const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    let mass = parseFloat(weight.value);
    let leng = parseFloat(height.value);
    let BMI = Math.floor(mass / (leng ** 2));  // Assuming height is in meters

    if (BMI <= 18.5) {
        result.innerHTML = `Your BMI is ${BMI}, you are underweight.`;
    } else if (BMI > 18.5 && BMI <= 24.9) {
        result.innerHTML = `Your BMI is ${BMI}, your weight is normal.`;
    } else if (BMI >= 25 && BMI <= 29.9) {
        result.innerHTML = `Your BMI is ${BMI}, you are overweight.`;
    } else if (BMI >= 30) {
        result.innerHTML = `Your BMI is ${BMI}, you have obesity.`;
    }
});
