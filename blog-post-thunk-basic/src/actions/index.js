import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POST", payload: response.data });
  };
};

export const fetchUser = (Id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${Id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
