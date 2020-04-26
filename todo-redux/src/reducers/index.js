import { combineReducers } from "redux";

const addTaskReducer = (allTasks = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...allTasks, action.payload];
    case "DELETE_TASK":
      return allTasks.filter((task) => task !== action.payload);
  }
  return allTasks;
};

const taskDoneReducer = (doneTask = [], action) => {
  switch (action.type) {
    case "TASK_DONE":
      return [...doneTask, action.payload];
  }
  return doneTask;
};

export default combineReducers({
  allTasks: addTaskReducer,
  doneTask: taskDoneReducer,
});
