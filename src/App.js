import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';
import Main from './pages/main/';
import Products from './pages/products';
import Users from './pages/users';

function App() {
  return (
    <Router>

      <div id='wrapper'>
        
        <Sidebar />
        
        <div id="content-wrapper" className="d-flex flex-column">
            
            <Header />

            <Switch>
              
              <Route exact path="/">
                <Main />
              </Route>

              <Route path="/products">
                <Products />
              </Route>

              <Route path="/users">
                <Users />
              </Route>

            </Switch>

            <Footer />

        </div>
        
      </div>

    </Router>
  );
}

export default App;