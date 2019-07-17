
let todos = getTodos()

const filter = {

    search_text:""
}

displayTodos()




// Event Listeners

document.querySelector('#form_todo').addEventListener('submit',function(e){
    e.preventDefault()
    saveTodos(todos,e)
    ul.innerHTML = ''
    displayTodos(todos,filter)
    e.target.new_todo.value = ''

})


document.querySelector('#search-input').addEventListener('input',function(e){

    filter.search_text = e.target.value  
    displayTodos()

})