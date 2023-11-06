//import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
} else {
  throw 'Root element not found. Unable to render the App.';
}
