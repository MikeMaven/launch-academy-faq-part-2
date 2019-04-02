import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import FAQContainer from './containers/FAQContainer';

ReactDOM.render(
  <FAQContainer />,
  document.getElementById('app')
);
