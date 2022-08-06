import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import { GrudgeProvider } from "./GrudgeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GrudgeProvider>
      <Application />
    </GrudgeProvider>
  </React.StrictMode>
);
