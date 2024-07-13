const inp = document.getElementById('inp')
const copy = document.getElementById('copy-btn')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const generate = document.getElementById('generateBtn')
let inputSlider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("slidervalue");


slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.textContent = inputSlider.value;
});

function generatePassword() {
    const length = inputSlider.value;
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '@-*';
    let characters = '';
    let password = '';

    // Include selected character types
    if (lower.checked) characters += lowercaseChars;
    if (upper.checked) characters += uppercaseChars;
    if (number.checked) characters += numberChars;
    if (symbol.checked) characters += symbolChars;

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}






generate.addEventListener('click', () => {
    if (lower.checked || upper.checked || number.checked || symbol.checked) {


        inp.value = generatePassword()
    }
    else {
        alert('please choose password category')
    }
})




copy.addEventListener('click', () => {
    if (inp.value != '' || inp.value.length > 0) {
        navigator.clipboard.writeText(inp.value)
        copy.innerText = 'check';
        copy.title = 'Password Copied';

        setTimeout(() => {

            copy.title = '';
            inp.value = ''


        }, 2000)
    }
})

