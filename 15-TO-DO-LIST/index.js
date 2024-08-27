const inp = document.getElementById('inp')
const addbtn = document.getElementById('btn')
const todoList = document.querySelector('.todo-container')

let editTodo


const addTodo = () => {
    let inputText = inp.value.trim()
    if (inputText === '') {
        alert('please add todo')
        return
    }
    if (addbtn.innerHTML === 'Edit') {
        let oldText = editTodo.querySelector('p').innerHTML
        let newText = inp.value
        editTodo.querySelector('p').innerHTML = newText
        addbtn.innerHTML = 'Add'

    }
    else {
        let li = document.createElement('li')
        let p = document.createElement('p')

        p.innerHTML = inputText
        li.append(p)

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delBtn', 'del')
        deleteBtn.textContent = 'Remove'
        li.appendChild(deleteBtn)


        let editBtn = document.createElement('button')
        editBtn.classList.add('delBtn', 'edit')
        editBtn.textContent = 'Edit'
        li.appendChild(editBtn)

        todoList.appendChild(li)
        inp.value = ''
    }

}


const updateTodo = (e) => {
    if (e.target.innerHTML === 'Remove') {
        todoList.removeChild(e.target.parentElement)
    }
    if (e.target.innerHTML === 'Edit') {
        inp.value = e.target.parentElement.querySelector('p').innerHTML
        addbtn.innerHTML = 'Edit'
        editTodo = e.target.parentElement
    }

}


addbtn.addEventListener('click', addTodo)
todoList.addEventListener('click', updateTodo)