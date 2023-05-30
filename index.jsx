import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/App';

import './style/style.scss';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <App />
);

