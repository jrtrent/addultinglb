import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container} from "../Grid";
import CategoryItem from '../CategoryItem';
import DailyTaskItem from '../DailyTaskItem';



class ActiveTasks extends Component {
    constructor(){
        super();
        this.state={
            categories:[],
            dailytasks:[]
        }
    }
    //renders dailytasks when page loads
    componentWillMount(){
      this.getCategories();
      this.getDailyTasks();
    }
    
    //
    getCategories(){
        axios.get('http://localhost:3000/api/categories')
            .then(response => {
               this.setState({categories: response.data},()=>{
                 //  console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
    }

    getDailyTasks(){
        axios.get('http://localhost:3000/api/dailytasks')
            .then(response => {
               this.setState({dailytasks: response.data},()=>{
                 console.log(this.state);
               })
            })
            .catch(err=>console.log(err));
    }
render() {
        const categoryItems = this.state.categories.map((category, i) =>{
    return (
            <CategoryItem  
            key={category.id} 
            item={category}/>
        )
    })
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
                    Todays Tasks
                </Jumbotron>
                    <ul className="collection with-header">
                      <li className="collection-header"><h3>{categoryItems}</h3></li>
                      <li className="collection-header"><h3>{dailyTaskItems}</h3></li>
                    </ul>
                 
    
            </Container>
        )
    
}
}
export default ActiveTasks;