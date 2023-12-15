document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addTask = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTask.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const listItem = document.createElement("li");

      //Create Text node that will create a tasklist
      const taskTextNode = document.createTextNode(taskText);
      listItem.appendChild(taskTextNode);
      //Create a button
      const editButton = document.createElement("button");
      //Name this button Edit
      editButton.textContent = "Edit";
      editButton.style.backgroundColor = "yellow";
      editButton.style.color = "white";
      editButton.classList.add("edit-button");
      // Add more style properties as needed
      listItem.appendChild(editButton);
      console.log(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.backgroundColor = "red";
      deleteButton.style.color = "white";
      deleteButton.classList.add("delete-button");
      listItem.appendChild(deleteButton);
      console.log(deleteButton);

      taskList.appendChild(listItem);
      taskInput.value = "";

      // Attach event listeners for Edit and Delete buttons
      editButton.addEventListener("click", function () {
        const editedText = prompt("Edit the task:", taskText);
        if (editedText !== null) {
          taskTextNode.textContent = editedText;
        }
      });

      deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });
    }
  });
});
