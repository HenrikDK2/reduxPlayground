import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { updateUsers, filterUsers } from "./actions/index";
import rootReducer from "./reducers";
import "regenerator-runtime/runtime";

//DOM
const filterList = document.getElementById("filter");
const allList = document.getElementById("all");

//Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => store.getState());

//Update State
(async () => {
  await store.dispatch(updateUsers());
  store.dispatch(filterUsers("lea"));
  updateList();
})();

//Update DOM Content
function updateList() {
  store.getState().filter.forEach((item) => {
    filterList.innerHTML += `<li>${item.name}</li>`;
  });

  store.getState().users.forEach((item) => {
    allList.innerHTML += `<li>${item.name}</li>`;
  });
}
