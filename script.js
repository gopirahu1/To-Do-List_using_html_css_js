function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const name = document.getElementById('name');


    if(name.value === ''){
        alert('please enter your name')
        return;
    }
    else if (gmail.value === '') {
        alert('Please enter yor gmail');
        return;
    }
     else if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }
    // function Submit(){
    //  if(name.value != '' && gmail.value !='' && taskInput.value != ''){
    //     alert('submited sucessfully');
    //     return;
    // }
// }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}
