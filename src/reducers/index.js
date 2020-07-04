const rootReducer = (state = { test: "hej" }, action) => {
  switch (action.type) {
    case "UPDATEUSERS":
      return action.payload;
    case "FILTERUSERS":
      return {
        ...state,
        filter: state.users.filter((e) =>
          e.name.toLowerCase().includes(action.value.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
export default rootReducer;
