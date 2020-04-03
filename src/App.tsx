import React from 'react';
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import MainPage from './pages/main/MainPage'

interface AppProps {}

const App:React.FC<AppProps> = props => {
  return (
      <div className="App">
        <Helmet>
          <title>Gifty</title>
        </Helmet>
        <Route exact path="/" component={MainPage} />
      </div>
  );
}

export default App;
