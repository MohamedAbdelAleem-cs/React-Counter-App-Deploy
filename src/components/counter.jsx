import React, { Component } from 'react';

class Counter extends Component {
    //Runs when dom updates used to get make calls of new data from servers if update happened
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call to get new data from server
        }

    }

    componentWillUnmount(){
        console.log('Counter- Unmount');
    }


    /* this feature creates an instance for every counter 
    constructor(){
        super();
     this.handleIncrement= this.handleIncrement.bind(this);
    }*/
//this feature may break or be unavailable soon

    

 
    render() {
        //shows the objects that are rendered with their properties
        //console.log(this.props);
        console.log('counter- rendered');  
        return( 
            <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
            onClick={() =>{this.props.onIncrement(this.props.counter) }
    }
            className="btn btn-secondary btn-sm">
                Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );

        
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count ===0? 'Zero': count;
    };
}
 
export default Counter;