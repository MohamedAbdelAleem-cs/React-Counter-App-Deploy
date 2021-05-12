import React, {Component} from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';



class App extends Component {

  state = {
    counters:[
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
  }
  //used to construct the app
  constructor(props){
    super(props);
    console.log('App - Constructor')
  }
  //Mounting means is when all the objects are in the dom
  componentDidMount() {
    //ajax call
    console.log('App- Mounted')
  }
  handleIncrement = counter =>{
  const counters = [...this.state.counters];
  let index=counters.indexOf(counter);
  counters[index]={ ...counter };
  counters[index].value++;
  //used to update the app all rerender the app it gets a react element in viritual dom then compares it to dom and updates the difference
  this.setState({counters});
  
  }
  handleReset=()=>{
  const counters= this.state.counters.map(c => {
      c.value =0;
      return c;
  });
  this.setState({counters});
  };
  
  handleDelete = counterId =>{
      const counters= this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  };
  render() { 
    console.log('App - Rendered');
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
      <main className="container">
        <Counters
        counters={this.state.counters} 
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}/> 
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;
