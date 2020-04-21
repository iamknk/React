import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };
  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Youtube Search</label>
            <input
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
