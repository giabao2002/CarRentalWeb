import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import mySaga from "./redux/sagas";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({ thunk: false }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
