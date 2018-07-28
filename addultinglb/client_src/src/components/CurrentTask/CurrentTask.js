import React, {Component} from 'react';
import axios from 'axios';
import Timer from '../Timer';
import {Panel} from 'react-bootstrap';
import{Row,Container,Col} from "../Grid";








class CurrentTask extends Component  {
        constructor(props){
            super(props);
            this.state = {
                id:'',
                name: '',
                isDone:'',
                notes:'',
                

            }
                this.handleInputChange=this.handleInputChange.bind(this);
            
        }

            componentWillMount() {
                this.getCurrentTask();
            }
            getCurrentTask(){
                let dailytaskId = this.props.match.params.id;
                axios.get(`http://localhost:3000/api/dailytasks/${dailytaskId}`)
                    .then(response => {
                    this.setState({
                        name:response.data.name,
                        isDone:response.data.isDone,
                        notes:response.data.notes
                    }, () => {
                        console.log(this.state);
                    });
                })
                    .catch(err=>console.log(err));
                }

            editDailyTask(newdailyTask) {
                axios.request({
                    method:"put",
                    url:`http://localhost:3000/api/dailytasks/${this.state.id}`,
                    data:newdailyTask
        
                }).then(response => {
                    this.props.history.push('/activetasks');
                }).catch(err=>console.log(err));
        
            }
            
    handleFormSubmit = (e) => {
       
       
        const newdailyTask = {
            name: this.refs.name.value,
            isDone:this.refs.isDone.value,
            notes:this.refs.notes.value


        }
        this.editDailyTask(newdailyTask);
        e.preventDefault();
       
    }

    handleClick = event => {
        this.setState({ isDone: !this.state.isDone });
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    render() {
        return (
           <div>
               <div>
                <a className="waves-effect waves-light btn-small" href="/activetasks"><i className="material-icons left">arrow_back</i>Back</a>
              <h1 className="align-left">Current Task </h1>
              <br />
              </div>
              
              <div className="row">
                <div className="col s12 m5">
                <div className="card large">
                   <Timer />
                </div>
                </div>
            </div>
           
           <div>
            <div className="col s12 m5">
                <div className="card large">
                
                
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <div>
                    <div className="input-field">
                        <label  htmlFor="name">TaskName</label>
                            <input type="text" 
                            name="name" 
                            ref="name"
                            placeholder=""
                            value={this.state.name}
                            onChange={this.handleInputChange}/>
                    </div>
                        <label>
                            <input type="checkbox" 
                            checked={this.state.isDone}
                            onChange={this.handleClick} />
                            <span><h3>Complete</h3></span>
                        </label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="notes"><h3>Task Notes</h3></label>
                    </div>
                    <p>
                    </p>
                    
                    <input type="submit" value="Save" className="btn" />

                    </form>
                    </div>
                </div>
            </div>
            </div>
                 

       
        
   

        )
    }

}

export default CurrentTask;