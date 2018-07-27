import React, {Component} from 'react';

class CategoryItem extends Component  {
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render() {
        return (
            <a href={`/categories/${this.state.item.id}`} className="collection-item">{this.state.item.name}</a>
        )
    }
}

export default CategoryItem;