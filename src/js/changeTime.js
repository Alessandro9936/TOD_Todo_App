import { format, getDay, getMonth, getWeek } from "date-fns";
import { informationHolder } from "./infoHolder";

const infoDate = (() => {
  let day = getDay(new Date());
  let week = getWeek(new Date());
  let month = getMonth(new Date());
  let date = format(new Date(), "yyyy-MM-dd");

  const sendDay = () => {
    return day;
  };

  const sendWeek = () => {
    return week;
  };

  const sendMonth = () => {
    return month;
  };

  const sendDate = () => {
    return date;
  };

  return {
    sendDay,
    sendWeek,
    sendMonth,
    sendDate,
  };
})();

export const timeLogic = (() => {
  const checkPeriod = (target) => {
    switch (target) {
      case "Day":
        informationHolder.filterArrayDay(infoDate.sendDate());
        break;
      case "Week":
        informationHolder.filterArrayWeek(infoDate.sendWeek());
        break;
      case "Month":
        informationHolder.filterArrayMonth(infoDate.sendMonth());
        break;
    }
  };
  return {
    checkPeriod,
  };
})();

export const timeUI = (() => {
  const navPeriods = document.querySelectorAll(".day-btn");
  const dayContainer = document.querySelector("[data-day]");
  const dateContainer = document.querySelector("[data-date]");
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const addActive = (target) => {
    if (target === "Day") {
      _handleDayDateDisplay(target);
    } else {
      navPeriods.forEach((period) => period.classList.remove("active"));
      target.classList.add("active");
    }

    _handleDayDateDisplay(target.textContent);
  };

  function _handleDayDateDisplay(target) {
    switch (target) {
      case "Day":
        _displayDay();
        break;
      case "Week":
        _displayWeek();
        break;
      case "Month":
        _displayMonth();
        break;
    }
  }

  function _displayDay() {
    const today = infoDate.sendDay();
    dayContainer.textContent = weekDays[today];
    dateContainer.textContent = infoDate.sendDate();
  }

  function _displayWeek() {
    const week = infoDate.sendWeek();
    dayContainer.textContent = `Week ${week}`;
    dateContainer.textContent = months[infoDate.sendMonth()];
  }

  function _displayMonth() {
    dayContainer.textContent = months[infoDate.sendMonth()];
    dateContainer.textContent = "";
  }

  return {
    addActive,
  };
})();
