import React from "react";
import { connect } from "react-redux";

const AllTasks = () => {
  return <div>{}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { task: state.allTasks };
};
export default connect(mapStateToProps)(AllTasks);
