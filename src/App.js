import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ProtectedRoute from './components/ProtectedRoute';
import { trucksReducer as reducer } from './reducers';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar'
import Backdrop from './components/Backdrop/Backdrop'
import Login from './components/Login';
import Trucklist from './components/Trucklist';
import MyTrucks from './components/MyTrucks';
import AddTruck from './components/AddTruck';
import UpdateTruck from './components/UpdateTruck';
import Register from './components/Register';


const store = createStore(reducer, applyMiddleware(thunk));


function App() {
  const [sideDrawerOpener, setsideDrawerOpener] = useState(false);
  const drawerTogglerHandler = () => {
    setsideDrawerOpener(prevState => ({
      ...prevState,
      sideDrawerOpener: !setsideDrawerOpener
    }));
  };

  const drawerCloser = () => {
    setsideDrawerOpener(false);
  };

  return (
    <Provider store={store}>
      <Switch>
      <div className="App">
        <main style={{ marginTop: "98px" }}>
        <Route exact path="/" component={Login} />  
        <ProtectedRoute path="/trucks" component={Trucklist} />
        <ProtectedRoute path="/addtruck" component={AddTruck} />
        <ProtectedRoute path="/mytrucks" component={MyTrucks} />
        <Route 
          path="/update-truck/:id"
          render={props => (
            <UpdateTruck {...props} />
          )}
        />
        <Route exact path="/register" component={Register} />
        <Toolbar drawerClickHandler={drawerTogglerHandler} />
        <SideDrawer show={sideDrawerOpener} close={drawerCloser} />
        <Backdrop drawerClose={drawerCloser} />  
        </main>
      </div>
      </Switch>
    </Provider>
  );
}

export default App;