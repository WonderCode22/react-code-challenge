import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import HomePage from './components/Home';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies';
import Series from './components/Series';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/movies'>
            <Movies/>
          </Route>
          <Route path='/series'>
            <Series/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
