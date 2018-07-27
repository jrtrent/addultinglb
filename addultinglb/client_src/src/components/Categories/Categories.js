import React, {Component} from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import {Container} from "../Grid";
import CategoryItem from '../DailyTaskItem';


class Categories extends Component {
    constructor(){
        super();
        this.state={
            categories:[]
        }
    }
    //renders dailytasks when page loads
    componentWillMount(){
      this.getCategories();
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
render() {
        const categoryItems = this.state.categories.map((category, i) =>{
    return (
            <CategoryItem  
            key={category.id} 
            item={category}/>
        )
    })
        return (
            <Container fluid>
               
                <Jumbotron>
                    My Tasks
                    <ul className="collection">
                        {categoryItems}
                    </ul>
                </Jumbotron>
            </Container>
        )
    
}
}
export default Categories;