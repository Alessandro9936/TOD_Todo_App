import "../css/style.css";
import { taskLogic, tasksUI } from "./addTaks";
import { timeLogic, timeUI } from "./changeTime";
import { informationHolder } from "./infoHolder";

const init = (() => {
  const initTask = document.querySelector(".input-style");
  const submitTask = document.querySelector(".btn-submit");
  const navBar = document.querySelector(".day-nav-list");

  window.addEventListener("load", () => {
    informationHolder.getTasksStorage();
    timeUI.addActive("Day");
    timeLogic.checkPeriod("Day");
  });

  initTask.addEventListener("click", tasksUI.toggleFormVisibility);

  submitTask.addEventListener("click", (e) => {
    const task = taskLogic.createTask();
    informationHolder.pushNewTask(task);
    informationHolder.addTaskStorage(task);
    timeLogic.checkPeriod(document.querySelector(".active").textContent);
  });

  navBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("day-btn")) {
      timeUI.addActive(e.target);
      timeLogic.checkPeriod(e.target.textContent);
    }
  });
})();
