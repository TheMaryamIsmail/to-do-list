// select elements//
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// add event listener to the "add task" button//

 addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();

    if (taskText) {
        // create new task item //
        const listItem = document.createElement("li");
        listItem.style.color = "white";
        listItem.style.fontFamily = "lucida sans"
        listItem.style.textTransform = "uppercase"
        listItem.style.listStyleType = "none"
        // listItem.style.margin = "5px"
        listItem.textContent = taskText;

        // Add a "complete" button//
        const completeButton = document.createElement("button");
         completeButton.style.borderRadius = "15px";
         completeButton.style.margin = "0px 5px 0px 5px";
         completeButton.style.backgroundColor = "black"
        completeButton.style.color ="white"
        completeButton.textContent = "complete" ;
        completeButton.addEventListener("click" , () =>{
           
            listItem.style.textDecoration = "line-through";
            // listItem.style.display = "none"
        });

        // Add a "Remove" button //

        const removeButton = document.createElement("button");
        removeButton.style.borderRadius = "15px";
        removeButton.style.margin = "0px 5px 0px 5px";
        removeButton.style.backgroundColor = "black"
        removeButton.style.color ="white"
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click" , () => {
            taskList.removeChild(listItem);
        });

        // Append buttons to the list item //
        listItem.appendChild(completeButton);
        listItem.appendChild(removeButton);

        // Add the List Item to the task list//

        taskList.appendChild(listItem);

        //Clear the input field//

        newTaskInput.value ="";
    }
 });
