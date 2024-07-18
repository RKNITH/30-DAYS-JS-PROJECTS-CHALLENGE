const wrong = document.getElementById("wrong")
const right = document.getElementById("right")


wrong.addEventListener('click', () => {
    right.style.display = ' flex'
    wrong.style.display = 'none'

})
right.addEventListener('click', () => {
    right.style.display = ' none'
    wrong.style.display = 'flex'

})



