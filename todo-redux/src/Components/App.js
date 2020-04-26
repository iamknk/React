import React from "react";
import TextBar from "./TextBar";
import AllTasks from "./AllTasks";
import TaskDone from "./TaskDone";
import "./App.css";

const App = () => {
  return (
    <div className="app ui container">
      <TextBar />
      <div className="ui grid">
        <div className="eight wide column">
          <AllTasks />
        </div>
        <div className="eight wide column">
          <TaskDone />
        </div>
      </div>
    </div>
  );
};

export default App;
