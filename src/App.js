import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './containers/sidebar/Sidebar';
import WrapperContent from './pages/main/WrapperContent';



function App() {
  return (
    <Router>

      <div id='wrapper'>
        <Sidebar />
        <Switch>
          <Route exact path="/" exact={true}>
            <WrapperContent />
          </Route>

          <Route path="/products">
            <WrapperContent />
          </Route>

          <Route path="/users">
            <WrapperContent />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;