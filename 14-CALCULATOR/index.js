const buttons = document.querySelectorAll('button')
const inp = document.getElementById('inp')

let arr = Array.from(buttons)
let string = ''

arr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.value === "=") {
            string = eval(string)
            inp.value = string
        }
        else if (e.target.value === "all-clear") {
            string = ''
            inp.value = string
        }
        else if (e.target.value === 'del') {
            string = string.substring(0, string.length - 1)
            inp.value = string
        }
        else {
            string += e.target.innerHTML
            inp.value = string
        }

    })
})

