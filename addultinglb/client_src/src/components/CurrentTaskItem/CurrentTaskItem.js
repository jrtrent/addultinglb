import React, {Component} from 'react';

class CurrentTaskItem extends Component  {
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render() {
        return (
            <a href={`/activetasks/${this.state.item.id}`} className="collection-item">{this.state.item.name}</a>
        )
    }
}

export default CurrentTaskItem;