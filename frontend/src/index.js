import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './Routers';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

//Css librerias
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
    <Routers />
  </Provider>
);