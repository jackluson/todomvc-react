import React from "react";
import Header from '../containers/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home/index'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

const routerConfig = () => {
  return(
    <div>
      <Header />
      <HashRouter>
        <Switch>
          <Route path="/SHOW_ALL" exact render={ (props) => <Home props={props} /> } />
          <Route path="/SHOW_ACTIVE" exact render={ (props) => <Home props={props} /> } />
          <Route path="/SHOW_COMPLETED" exact render={ (props) => <Home props={props} /> } />
          <Redirect to="/SHOW_ALL" />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  )
}
export default routerConfig