import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";

class TextBar extends React.Component {
  state = { term: "" };
  submitHelper = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div className="ui action input">
        <form onSubmit={this.submitHelper}>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            type="text"
            placeholder="Add New Todo"
          />
          <button type="submit" className="ui button">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTask })(TextBar);
