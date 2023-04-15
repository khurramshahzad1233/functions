import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {positions,transitions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from 'react-alert-template-basic';
import { ThemeProvider} from "./Contexttheme"

const options={
  timeout:5000,
  positions:positions.BOTTOM_CENTER,
  transitions:transitions.SCALE,
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider {...options} template={AlertTemplate}>
  <ThemeProvider>
     <App />
  </ThemeProvider>
  </AlertProvider>
  
  
);


