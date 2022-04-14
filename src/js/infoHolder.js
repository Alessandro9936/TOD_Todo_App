import { tasksUI } from "./addTaks";
import { isThisWeek, isThisMonth, parseISO } from "date-fns";

export const informationHolder = (() => {
  const tasksArray = [];

  const pushNewTask = (task) => {
    tasksArray.push(task);
  };

  const addTaskStorage = (task) => {
    const taskIndex = tasksArray.indexOf(task);
    localStorage.setItem(taskIndex, JSON.stringify(task));
  };

  const getTasksStorage = () => {
    Object.entries(localStorage).forEach(([key, value]) => {
      const task = JSON.parse(value);
      task.key = key;
      tasksArray.push(task);
    });
  };

  const filterArrayDay = (period) => {
    tasksUI.displayTask(tasksArray.filter((task) => task.dueDate === period));
  };

  const filterArrayWeek = (period) => {
    tasksUI.displayTask(
      tasksArray.filter((task) =>
        isThisWeek(parseISO(task.dueDate), { period })
      )
    );
  };

  const filterArrayMonth = (period) => {
    tasksUI.displayTask(
      tasksArray.filter((task) =>
        isThisMonth(parseISO(task.dueDate), { period })
      )
    );
  };
  const removeTask = (task) => {
    tasksArray.splice(tasksArray.indexOf(task), 1);
  };

  return {
    pushNewTask,
    getTasksStorage,
    addTaskStorage,
    filterArrayDay,
    filterArrayWeek,
    filterArrayMonth,
    removeTask,
  };
})();
