import React from "react";
import { connect } from "react-redux";
import "./TaskDone.css";

class TaskDone extends React.Component {
  renderList() {
    return this.props.doneTask.map((task) => {
      return (
        <div className="item">
          <h2>
            <div className="header">{task}</div>
          </h2>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui header">
        <br></br>
        <h2>Tasks Done</h2>
        <div className="ui list task-done">{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { doneTask: state.doneTask };
};
export default connect(mapStateToProps)(TaskDone);
