const ToDoButton = document.querySelector('.todo-add')
const ToDoList = document.querySelector('.todo-list')
var ToDoInput = document.querySelector('.todo-input')

function Appended(event){
	event.preventDefault()
	var todoContains = document.createElement("div")   //
	todoContains.classList.add("todo")
	var newTask = document.createElement("li")   //
	newTask.innerText = ToDoInput.value
	newTask.classList.add("todo-object")
	todoContains.appendChild(newTask) 

	var doneButton = document.createElement("button")   //
	doneButton.innerHTML = '<button id="todo-checked">checked</button>';
	doneButton.classList.add('checked')
	todoContains.appendChild(doneButton)

	var removeButton = document.createElement('button')  //
	removeButton.innerHTML = '<button id="todo-remove">remove</button>'
	removeButton.classList.add('remove')
	todoContains.appendChild(removeButton)
	ToDoList.appendChild(todoContains)
	ToDoInput.value = " " 
}
ToDoButton.addEventListener("click", Appended)

function Removed(task){
	var object = task.target; //
	if (object.classList[0] == 'checked'){
		var todo = object.parentElement
		todo.classList.toggle('completed')}

	if (object.classList[0] == 'remove'){
		var todo = object.parentElement
		todo.remove()}
}
ToDoList.addEventListener("click", Removed)