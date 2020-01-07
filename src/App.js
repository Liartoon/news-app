import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Main} from './pages/Main';
import {CreateNews} from './pages/CreateNews';
import {NewsPage} from './pages/NewsPage';
import {NavBar} from './components/NavBar';

function App() {
  return (
          <BrowserRouter>
          <NavBar />
          <Switch>
          <Route path={'/'} exact component={Main}></Route>
          <Route path={'/createNews'} component={CreateNews}></Route>
          <Route path={`/News/:newsId`} component={NewsPage}></Route>
          </Switch>
          </BrowserRouter>
  );
}

export default App;
