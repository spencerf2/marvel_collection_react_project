import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, Signin } from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home title={'Marvel Character Inventory'} />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
