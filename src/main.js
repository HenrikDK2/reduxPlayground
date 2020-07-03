import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { updateUsers } from "./actions/index";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => store.getState());
store.dispatch(updateUsers());
