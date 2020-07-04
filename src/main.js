import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { updateUsers, filterUsers } from "./actions/index";
import rootReducer from "./reducers";
import "regenerator-runtime/runtime";

(async () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  store.subscribe(() => store.getState());
  await store.dispatch(updateUsers());
  store.dispatch(filterUsers("lea"));
})();
