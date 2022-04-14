import { informationHolder } from "./infoHolder";

const Task = (tit, desc, date, prio) => {
  const title = tit;
  const description = desc;
  const dueDate = date;
  const priority = prio;

  return { title, description, dueDate, priority };
};

export const tasksUI = (() => {
  const formContainer = document.querySelector(".task-spec-container");

  const toggleFormVisibility = () => {
    formContainer.classList.toggle("hidden");
  };

  const displayTask = (tasks) => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    tasks.forEach((task) => {
      const taskCont = document.createElement("div");
      taskCont.classList.add("task");
      taskCont.dataset.task = `${task.key}`;

      const taskPreview = document.createElement("div");
      taskPreview.classList.add("task-visible");
      const btnCheck = document.createElement("button");
      btnCheck.classList.add("btn-check");
      const taskTitle = document.createElement("p");
      taskTitle.textContent = `${task.title}`;
      const btnShowMore = document.createElement("span");
      btnShowMore.textContent = "+";
      taskPreview.appendChild(btnCheck);
      taskPreview.appendChild(taskTitle);
      taskPreview.appendChild(btnShowMore);

      const taskSpecifics = document.createElement("div");
      taskSpecifics.classList.add("task-description", "hidden");
      const taskDescription = document.createElement("p");
      taskDescription.textContent = `Description: ${task.description}`;
      const taskDueDate = document.createElement("p");
      taskDueDate.textContent = `Due Date: ${task.dueDate}`;
      const taskPriority = document.createElement("p");
      taskPriority.textContent = `Priority: ${task.priority}`;
      const deleteTaskBtn = document.createElement("button");
      deleteTaskBtn.classList.add("btn-delete");
      deleteTaskBtn.textContent = "Delete";
      taskSpecifics.appendChild(taskDescription);
      taskSpecifics.appendChild(taskDueDate);
      taskSpecifics.appendChild(taskPriority);
      taskSpecifics.appendChild(deleteTaskBtn);

      taskCont.appendChild(taskPreview);
      taskCont.appendChild(taskSpecifics);

      tasksContainer.appendChild(taskCont);

      btnShowMore.addEventListener("click", () =>
        taskSpecifics.classList.toggle("hidden")
      );
      btnCheck.addEventListener(
        "click",
        () =>
          (btnCheck.style.backgroundColor = "#6b7885"
            ? (btnCheck.style.backgroundColor = "#2bceff")
            : (btnCheck.style.backgroundColor = "#6b7885"))
      );

      deleteTaskBtn.addEventListener("click", (e) => {
        localStorage.removeItem(`${task.key}`);
        informationHolder.removeTask(task);
        e.target.closest(".task").remove();
      });
    });
  };

  return {
    toggleFormVisibility,
    displayTask,
  };
})();

export const taskLogic = (() => {
  const createTask = () => {
    let taskTitle = document.getElementById("data-title").value;
    let taskDescription = document.getElementById("description").value;
    let taskDueDate = document.getElementById("task-due-date").value;
    let taskPriority = Array.from(
      document.getElementsByName("task-priority")
    ).find((input) => input.checked).value;

    const task = Task(taskTitle, taskDescription, taskDueDate, taskPriority);

    tasksUI.toggleFormVisibility();
    return task;
  };

  return {
    createTask,
  };
})();
