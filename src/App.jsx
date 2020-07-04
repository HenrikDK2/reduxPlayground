import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Pages from "./Pages";
import rootReducer from "./reducers";

//Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Pages />
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
