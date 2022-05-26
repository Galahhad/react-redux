import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const cash = {
  cash: 0,
};

const reducer = (state = cash, action) => {
  switch (action.type) {
    case "add_cash":
      return { ...state, cash: state.cash + action.payload };
    case "down_cash":
      return { ...state, cash: state.cash - action.payload };
    case "delete_cash":
      return { ...state, cash: (state.cash = action.payload) };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
