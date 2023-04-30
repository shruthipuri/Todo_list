let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
const enter = document.querySelector("#jod");

// function starts here

//list -section:
function addtoDOM(task){
    const li = document.createElement('li');

    li.innerHTML = `<input type="checkbox" id="${task.id}"${task.done ? 'checked' : ''} class="chk">
     <label class = "break" for="${task.id}">${task.text}</label>
     <i  data-id="${task.id}" class="fa-sharp fa-solid fa-trash plus"></i>`;
     taskList.append(li);
}
// for creating tasklist blank and making new list in the DOM
function renderList () {
    taskList.innerHTML = '';

    for(let i=0; i<tasks.length; i++){
        addtoDOM(tasks[i]);
    }
    //printing task count
    tasksCounter.innerHTML = tasks.length;
}
// delete function
function deleteTask (taskId) {
    const newtask = tasks.filter(function(task){
        return task.id != taskId
    });
    tasks = newtask;
    renderList();
}
//adding function
function addtasks (task) {
    if(task){
        tasks.push(task);
        renderList();
        return;
    }
}
//show alerts
function showNotification(text) {
    alert(text);
}
//funtion to calling to add section
function keypress(){
        const text = addTaskInput.value;
        console.log('text' , addTaskInput.value);
        if(text === ""){
            showNotification("can't be empty");
            return;
        }
        const task = {
            text,
            id: Date.now().toString(),
            done: false
        }
    addTaskInput.value = '';
    console.log(enter.value);
        addtasks(task);
    }
    //function to call delete section;
function clil(e){
    const target = e.target;
    if(target.className == 'fa-sharp fa-solid fa-trash plus'){
const taskId = target.dataset.id;
deleteTask(taskId);
console.log(taskId)
return;
    }
}
//funtion to delete all section
var d_all = document.querySelector(".cl");
d_all.addEventListener('click' , ()=>{
    taskList.innerHTML = '';
    tasksCounter.innerHTML = 0;

    return;
})
//click events ;
enter.addEventListener('click' , keypress);
document.addEventListener('click' , clil);
