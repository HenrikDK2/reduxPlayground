import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Pages from "./Pages";
import rootReducer from "./reducers";

//Store
const store = createStore(rootReducer);

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
