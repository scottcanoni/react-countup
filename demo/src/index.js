import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const container = document.getElementById('root');
const root = createRoot(container);
// Strict mode causes this error with start and delay props:
// Uncaught TypeError: Cannot read properties of null (reading 'tagName')
root.render(<React.StrictMode><App /></React.StrictMode>);
