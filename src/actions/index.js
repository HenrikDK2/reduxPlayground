export const updateUsers = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATEUSERS",
          payload: data,
        });
      });
  };
};
