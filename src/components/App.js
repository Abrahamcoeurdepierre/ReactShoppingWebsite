import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./Profile"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Dashboard from './Store/Dashboard'
import AddItem from './StoreAdmin/AddItem'
import DashboardAdmin from './StoreAdmin/TodoList'
import ListCart from './Store/ListCart';
import Success from './Store/Success'

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Signup} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/AddItem" component={AddItem} />
              <PrivateRoute path="/DashboardAdmin" component={DashboardAdmin} />
              <PrivateRoute path="/ListCart" component={ListCart} />
              <PrivateRoute path="/Success" component={Success} />



              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App