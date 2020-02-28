import React, { useContext } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Main} from './pages/Main';
import {CreateNews} from './pages/CreateNews';
import {NewsPage} from './pages/NewsPage';
import {NavBar} from './components/NavBar';

import {AlertState} from './context/alert/AlertState';
import {FirebaseState} from './context/firebase/FirebaseState';
import { LogRegForm } from './components/LogRegForm';
import { UserState } from './context/user/UserState';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <UserState>
      <FirebaseState>
            <AlertState>
              <BrowserRouter>
              <NavBar />
              <Switch>
              <Route path={'/'} exact component={Main}></Route>
              <Route path={'/createNews'} component={CreateNews}></Route>
              <Route path={`/News/:newsId`} component={NewsPage} ></Route>
              <Route path={`/login&register`} component={LogRegForm} ></Route>
              <Route path={`*`}> <ErrorPage errMsg="Page not found" /></Route>
              </Switch>
              </BrowserRouter>
            </AlertState>
      </FirebaseState>
    </UserState>
  );
}

export default App;
