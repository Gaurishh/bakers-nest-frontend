import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {Provider} from 'react-redux';
import store from './store.js';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const shopUri = "http://localhost:3000/shop";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store = {store}>
    <Auth0Provider domain={domain} clientId = {clientId} redirectUri={shopUri}>
      <App />
    </Auth0Provider>
  </Provider>
);
