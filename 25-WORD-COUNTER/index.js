const text = document.getElementById('text')
const result = document.getElementById('result')
const calculate = document.getElementById('calculate')



calculate.addEventListener('click', () => {
    let words = text.value
    let wordLenght = words.split(" ").length
    let letterLenght = words.split("").length

    result.innerHTML = `Total words are ${wordLenght} and total letters are ${letterLenght}`




})