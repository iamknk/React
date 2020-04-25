import React from "react";
import { connect } from "react-redux";

class AllTasks extends React.Component {
  listRender() {
    return this.props.tasks.map((task) => {
      return (
        <div className="item">
          <div className="right floated content">
            <div className="ui button">Add</div>
          </div>
          <div className="content">{task}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui middle aligned divided list">{this.listRender()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { tasks: state.allTasks };
};
export default connect(mapStateToProps)(AllTasks);
