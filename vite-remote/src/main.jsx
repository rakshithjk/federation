import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const lazyLoad = ()=> import("remote_app/Button");
lazyLoad().then(item=>item.default("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
