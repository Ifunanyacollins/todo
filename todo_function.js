
// App Functions


const ul = document.querySelector('#todos')
const p = document.querySelector('#sum')

// TO SAVE THE TODOS,TO LOCAL STORAGE

const saveTodos = function(todos,e){


	const todos_data = {
        id:uuidv4(),
        task:e.target.new_todo.value,
        isCompleted:false
    }
todos.push(todos_data)
const stringify_todos = JSON.stringify(todos)
localStorage.setItem('todos',stringify_todos)

}


//UPDATETODO

const updateTodo = function(){
 const stringify_todos = JSON.stringify(todos)
 localStorage.setItem('todos',stringify_todos)
}


// REMOVETODO
const removeTodo = function(id){

	const removed_todo = todos.findIndex(function(todo){
         return todo.id == id
	})

	if(removed_todo > -1){
		todos.splice(removed_todo,1)
		updateTodo()


	}else{
		alert('TODO HAS BEEN REMOVED,REFRESH YOUR BROWSER')
	}


}

// RENDER TODOS TO THE DOM

const getTodos = function(){

const getSavedData = localStorage.getItem('todos')
if(getSavedData != null){
	return JSON.parse(getSavedData)
}else{
	return []
}



}

// DISPLAY TODOS IN THE DOM
const displayTodos = function(){

filterTodos()
if(filter_func.length > 0){

sumTodos(filter_func) 
ul.innerHTML = ''

filter_func.forEach(function(tasks){
    
	const li = document.createElement('li')

	const button = document.createElement('button')
	button.textContent = 'X'

	const checkbox = document.createElement('input')
	checkbox.setAttribute('type' ,'checkbox')
	if(tasks.isCompleted === true ){
		checkbox.checked = true
	}

	const span = document.createElement('span')
	span.textContent = tasks.task

	ul.appendChild(li)
	li.appendChild(checkbox)
	li.appendChild(span)
	li.appendChild(button)

	button.addEventListener('click',function(){
		removeTodo(tasks.id)
		li.remove()
		filterTodos()
		sumTodos(filter_func) 
		
	})

	checkbox.addEventListener('change',function(e){
        tasks.isCompleted = e.target.checked
        updateTodo()
        filterTodos()
		sumTodos(filter_func) 
	})






})

}


}

// TO FILTER TODOS BASE ON USER INPUT

const filterTodos = function(){

return filter_func = todos.filter(function(items){
	return items.task.toLowerCase().includes(filter.search_text.toLowerCase())
})



}

// GET SUMMARY OF TASKS

const sumTodos = function(filter_func){

const sum = filter_func.filter(function(item){
	return !item.isCompleted
})

p.textContent = `You have ${sum.length} left `
}