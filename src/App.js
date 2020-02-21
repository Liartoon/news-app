import React, { useContext } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Main} from './pages/Main';
import {CreateNews} from './pages/CreateNews';
import {NewsPage} from './pages/NewsPage';
import {NavBar} from './components/NavBar';

import {AlertState} from './context/alert/AlertState';
import {FirebaseState} from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
          <AlertState>
            <BrowserRouter>
            <NavBar />
            <Switch>
            <Route path={'/'} exact component={Main}></Route>
            <Route path={'/createNews'} component={CreateNews}></Route>
            <Route path={`/News/:newsId`} component={NewsPage} ></Route>
            </Switch>
            </BrowserRouter>
          </AlertState>
    </FirebaseState>
  );
}

export default App;
