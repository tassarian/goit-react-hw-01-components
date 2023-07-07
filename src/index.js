import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
  }

  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h2{
    margin-bottom: 30px;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<Global />
	</React.StrictMode>
);
