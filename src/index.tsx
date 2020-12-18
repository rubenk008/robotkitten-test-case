import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './theme/fonts/fonts.scss';
import FontsToPreload from './theme/fonts/fonts';
import PreloadFonts from './components/PreloadFonts';

ReactDOM.render(
  <React.StrictMode>
    <PreloadFonts fonts={FontsToPreload}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

