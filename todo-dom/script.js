// console.log("it works!")

// const $ = document.querySelector
// const formInput = document.getElementById('formInput')
const formInput = document.querySelector('#formInput')
const todoList = document.querySelector('ul')
const form = document.querySelector('form')

// console.log(formInput, form, todoList)

form.addEventListener('submit', event => {
    event.preventDefault()
    // console.log(event)
    // console.log(formInput.value)
    const newTodo = formInput.value

    const li = document.createElement('li')
    li.textContent = newTodo

    console.log(li)

    todoList.appendChild(li)
    formInput.value = ''
})