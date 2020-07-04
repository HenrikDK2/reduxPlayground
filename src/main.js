import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { updateUsers, filterUsers } from "./actions/index";
import rootReducer from "./reducers";
import "regenerator-runtime/runtime";

(async () => {
  //DOM
  const filterList = document.getElementById("filter");
  const allList = document.getElementById("all");
  const input = document.getElementsByTagName("input")[0];

  //Store
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  store.subscribe(() => store.getState());

  //Initial Update State
  await store.dispatch(updateUsers());
  store.dispatch(filterUsers("lea"));
  updateList();

  //Events
  input.addEventListener("keydown", () => {
    setTimeout(() => {
      store.dispatch(filterUsers(input.value));
      updateList();
    }, 0);
  });

  //Update DOM Content
  function updateList() {
    filterList.innerHTML = "";
    allList.innerHTML = "";

    store.getState().filter.forEach((item) => {
      filterList.innerHTML += `<li>${item.name}</li>`;
    });

    store.getState().users.forEach((item) => {
      allList.innerHTML += `<li>${item.name}</li>`;
    });
  }
})();
