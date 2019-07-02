import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerserviceWorker from './registerserviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerserviceWorker();