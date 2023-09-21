import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {createStore } from "redux";
import ContactReducer from "./components/redux/ContactReducer";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(ContactReducer);
root.render(
     <React.StrictMode>
          <Provider store={store}>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </Provider>
     </React.StrictMode>
);
