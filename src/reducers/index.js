const rootReducer = (state = { test: "hej" }, action) => {
  switch (action.type) {
    case "UPDATEUSERS":
      return action.payload;
    default:
      return state;
  }
};
export default rootReducer;
