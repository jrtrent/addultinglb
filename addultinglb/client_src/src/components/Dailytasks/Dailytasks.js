import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container} from "../Grid";
import DailyTaskItem from '../DailyTaskItem';

class Dailytasks extends Component {
    constructor(){
        super();
        this.state={
            dailytasks:[]
        }
    }
    //renders dailytasks when page loads
    componentWillMount(){
      this.getDailyTasks();
    }
    //
    getDailyTasks(){
        axios.get('http://localhost:3000/api/dailytasks')
            .then(response => {
               this.setState({dailytasks: response.data},()=>{
                 //  console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
    }
render() {
        const dailyTaskItems = this.state.dailytasks.map((dailytask, i) =>{
    return (
            <DailyTaskItem  
            key={dailytask.id} 
            item={dailytask}/>
        )
    })
        return (
            <Container fluid>
                <Jumbotron>
                    My Tasks
                    <ul className="collection">
                        {dailyTaskItems}
                    </ul>
                </Jumbotron>
            </Container>
        )
    
}
}
export default Dailytasks;