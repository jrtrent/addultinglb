import React from  'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dailytasks from "./Dailytasks";
import About from "./About";
import DailyTaskDetails from '../components/DailyTaskDetail';
import AddDailyTask from '../components/AddDailyTask';
import EditDailyTask from '../components/EditDailyTask';
import SignupForm from "../components/SignupForm";
import Login from "../components/Login";

const Main = () => (
    <Router>
        <div>
        <Switch>
            <Route exact path ="/" component={SignupForm}/>
            <Route exact path ="/Login" component={Login}/>
            <Route exact path ="/Dailytasks" component={Dailytasks}/>
            <Route exact path ="/About" component={About}/>
            <Route exact path ="/dailytasks/add" component={AddDailyTask}/>
            <Route exact path ="/dailytasks/edit/:id" component={EditDailyTask}/>
            <Route exact path ="/dailytasks/:id" component={DailyTaskDetails}/>

        </Switch>
        </div>
    </Router>
)

export default Main;
