import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import Home from "./features/home";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
