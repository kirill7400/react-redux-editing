import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import storeConfig from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ storeConfig() }>
    <App />
  </Provider>
);
