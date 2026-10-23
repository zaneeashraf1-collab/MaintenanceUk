import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent external browser extension interceptor errors from breaking the page
window.addEventListener('error', (event) => {
  if (
    event.message &&
    (event.message.includes('Cannot set property fetch') ||
     event.message.includes('chrome-extension://'))
  ) {
    event.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(<App />);
