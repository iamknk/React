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
      <form onSubmit={this.submitHelper}>
        <div className="ui fluid action input">
          <div className="ui input">
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Add New Todo"
            />
          </div>

          <button type="submit" className="ui button">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { addTask })(TextBar);
