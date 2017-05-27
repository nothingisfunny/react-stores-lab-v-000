import Store from '../stores/Store'
class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(){
  	super()
  	this.state = 0
  }

  increment(){
  	this.setState(this.state + 1)
  }

  decrement(){
  	this.setState(this.state - 1)
  }
}


const counterStore = new CounterStore();

export default counterStore;
