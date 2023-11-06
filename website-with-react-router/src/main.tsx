import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  throw 'Root element not found. Unable to render the App.';
}
