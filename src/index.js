import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './context/AppContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qnsirgiedao7vvyz.au.auth0.com"
    clientId="t4QjpiqYQjazZR4fSaYCOUxVnIiN9yIT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
