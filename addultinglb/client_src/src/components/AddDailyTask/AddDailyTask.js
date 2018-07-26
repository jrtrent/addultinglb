import React, {Component} from 'react';
import axios from 'axios';



class AddDailyTask extends Component  {
    AddDailyTask(newdailyTask) {
        axios.request({
            method:"post",
            url:'http://localhost:3000/api/dailytasks',
            data:newdailyTask

        }).then(response => {
    
            this.props.history.push('/dailytasks')
        }).catch(err=>console.log(err));

    } //push is where it is redirected to. 

    handleFormSubmit = (e) => {
        e.preventDefault();
       
        const newdailyTask = {
            name: this.refs.name.value,
            subject:this.refs.subject.value,
            priority: this.refs.priority.value,
            estTime: this.refs.estTime.value,
            recurring: this.refs.recurring.value

        }
        this.AddDailyTask(newdailyTask);
       
    }
    
    render() {
        return (
           <div>
                <a className="waves-effect waves-light btn-small" href="/dailytasks"><i className="material-icons left">arrow_back</i>Back</a>
              <h1>Add dailytask </h1>
              <br />
              <form onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="name" ref="name" />
                    <label htmlFor="name">TaskName</label>
                </div>
                <div className="input-field">
                    <input type="text" name="subject" ref="subject" />
                    <label htmlFor="subject">Subject</label>
                </div>
                <div className="input-field">
                    <input type="text" name="priority" ref="priority" />
                    <label htmlFor="priority">Priority</label>
                </div>
                <div className="input-field">
                    <input type="text" name="estTime" ref="estTime" />
                    <label htmlFor="estTime">estTime</label>
                </div>

                 <div className="input-field">
                    <input type="text" name="recurring" ref="recurring" />
                    <label htmlFor="recurring">Recurring</label>
                </div>
                <input type="submit" value="Save" className="btn" />
            
              </form>
   
        
         </div>
   

        );
    }

};

export default AddDailyTask;