const { createStore } = require("redux")

//define the store's reduer

const fruitReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FRUIT':
            return [...state, action.fruit];
        default:
            return state;
    }
}

//create the store

const store = createStore(fruitReducer)

//log to the console the stores state before and after
//dispatching the "ADD_FRUIT" action;
console.log(store.getState()) //[]
store.dispatch(addOrange);
console.log(store.getState()) //['orange']

//define and register a callback to listen for store updates
//and console log the store's state
const display = () => {
    console.log(store.getState());
};
const unsubscribeDisplay = store.subscribe(display);

//Dispatch the 'ADD_FRUIT' action. This time the 'display' callback
//will be called by the store when its state is updated.

store.dispatch(addOrange); // ['orange', 'orange']

//Unsubscribe the 'display' callback to stop listening for store updates.

unsubscribeDisplay()

//Dispatch the 'ADD_FRUIT' action one more time
//to confrim that the 'display' method won't cancel be called
//when the store state is updated.

store.dispatch(addOrange); // no output