import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import IndexRoute from './router/index.js'
import Frame from './common/component/Frame'

import "./common/css/reset.css";
import "./common/css/common.css";

function App() {
  return (
    <BrowserRouter>
      <Frame>
      </Frame>
      <div>
        {
          <IndexRoute />
        }
      </div>
      
    </BrowserRouter>
  );
}

export default App;
