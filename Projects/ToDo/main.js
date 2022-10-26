let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputValue = document.getElementById("taskToAddValue");
let editTask = document.getElementById("editTask");
var errorEditInfo = document.getElementById("errorEditTask");

var errorInfo = document.createElement("div");

addToDoButton.addEventListener("click", () => {
  if (inputValue.value !== "") {
    inputValue.placeholder = "";
    var divContainer = document.createElement("div");
    divContainer.classList.add("divTask");

    var taskValue = document.createElement("div");
    taskValue.innerText = inputValue.value;
    divContainer.appendChild(taskValue);

    var taskEdit = document.createElement("button");
    taskEdit.innerText = "Edycja";

    var taskRemove = document.createElement("button");
    taskRemove.innerText = "Usuń";

    var DivToMoveEverythingToEnd = document.createElement("div");
    DivToMoveEverythingToEnd.classList.add("MoveToTheEnd");
    DivToMoveEverythingToEnd.appendChild(taskEdit);
    DivToMoveEverythingToEnd.appendChild(taskRemove);

    divContainer.appendChild(DivToMoveEverythingToEnd);
    toDoContainer.appendChild(divContainer);
    inputValue.value = "";

    taskRemove.addEventListener("click", () => {
      divContainer.removeChild(taskValue);
      DivToMoveEverythingToEnd.removeChild(taskEdit);
      DivToMoveEverythingToEnd.removeChild(taskRemove);
    });

    taskEdit.addEventListener("click", () => {
      taskValue.style.color = "green";
      taskValue.style.fontWeight = "bold";

      var container = document.createElement("div");
      container.classList.add("editTaskContainer");
      var editInfo = document.createElement("h4");
      editInfo.innerText = "Edytuj zadanie: " + taskValue.innerText;
      var editValue = document.createElement("input");
      var editAccept = document.createElement("button");
      editAccept.classList.add("addToDo");
      editAccept.innerText = "+";

      container.appendChild(editInfo);
      container.appendChild(editValue);
      container.appendChild(editAccept);
      editTask.appendChild(container);

      editAccept.addEventListener("click", () => {
        if (editValue.value === "") {
          editValue.placeholder = "Uzupełnij pole";
        } else {
          divContainer.firstChild.textContent = editValue.value;
          editTask.removeChild(container);
          taskValue.style.color = "black";
          taskValue.style.fontWeight = "normal";
        }
      });
    });
  } else {
    inputValue.placeholder = "Uzupełnij pole";
  }
});
