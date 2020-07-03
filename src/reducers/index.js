let apiData = null;

const rootReducer = (state = { test: "hej" }, action) => {
  switch (action.type) {
    case "UPDATEUSERS":
      apiData = action.payload;
      return action.payload;
    case "FILTERUSERS":
      return {
        ...state,
        filter: state.filter((e) => e.name.toLowerCase().includes(action.value.toLowerCase())),
      };
    case "RESETUSERS":
      return apiData;
    default:
      return state;
  }
};
export default rootReducer;
