import React, { useReducer } from "react";
import Barmenu from "./components/Appbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Glass from "./pages/Glass";
import Cart from "./pages/Cart";
import Shop from './pages/Shop'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initialState, cartReducer, ContextApp } from "./context/reducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      <Router>
        <Barmenu />
        <Switch>
          <Route path="/Glass/:id" children={<Glass/>}>
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Contacts">
            <Main />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContextApp.Provider>
  );
}

export default App;
