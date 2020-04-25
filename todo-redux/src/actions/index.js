export const addTask = (task) => {
  return { type: "ADD_TASK", payload: task };
};

export const taskDone = (task) => {
  return { type: "TASK_DONE", payload: task };
};
