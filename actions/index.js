// Your implementation here.
// Hint: We need two actions!
import counterStore from '../stores/counterStore'
'use strict';


function increment(){
	counterStore.increment()
}

function decrement(){
	counterStore.decrement()
}

module.exports = {
	increment, 
	decrement
}

