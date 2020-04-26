import React from "react";
import { connect } from "react-redux";
import { taskDone } from "../actions";
import { deleteTask } from "../actions";

class AllTasks extends React.Component {
  taskDoneAndDelete(task) {
    this.props.taskDone(task);
    this.props.deleteTask(task);
  }
  listRender() {
    return this.props.tasks.map((task) => {
      return (
        <div className="item">
          <div className="right floated content">
            <button
              onClick={() => this.taskDoneAndDelete(task)}
              className="ui primary button"
            >
              Add
            </button>
          </div>
          <div className="content">{task}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui header">
        <br />
        <h2>Tasks ToDo</h2>
        <div className="ui middle aligned divided list">
          {this.listRender()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.allTasks };
};
export default connect(mapStateToProps, { taskDone, deleteTask })(AllTasks);
