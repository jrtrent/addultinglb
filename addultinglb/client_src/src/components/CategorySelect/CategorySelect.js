import React, {Component} from 'react';
import "./CategorySelect.css";

class CategorySelect extends Component  {
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render() {
        return (
        <div>
           
            <div className="row">
            <div className="input-field" id="disabled" >
              <input disabled value={this.state.item.name} id={this.state.item.id} type="text" className="validate"/>
              <label htmlFor="disabled">{this.state.item.name}</label>
            </div>
            <div className="input-field">
                    <input type="text" name="name" ref="name" />
                    <label htmlFor="name">TaskName</label>
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
            </div>
        </div>
        )
    }
}

export default CategorySelect;