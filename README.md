<h1 align="center">
Store
</h1>

The store is the central element of Redux's architecture.

The store holds the global state of an app.

The store is responsible for updating the global state via it's reducer, broadcasting state updates vis subscription, and listening for actions that tell it when to update the state.

<h1 align="center">
Creating the store
</h1>

The Redux library provides us with a createStore() method, which takes up to 3 args and return a Redux store.

```js 
    createStore(reducer, [preloadedState], [enhancer]);
```

    * reducer - A reducing function that receives the store's current state and incoming state, determines how to update the store's state, and returns the next state.

    * preloadedState - An object representing any app state that existed before the store was created.

    * enhancer - A function that adds extra functionality to the store.

Here's an example of how to create a store for a Fruit Stand App:
```js
    import { createStore } from 'redux'

    const fruiteReducer = (state = [], action) => {

    }

    const store = createStore(fruitReducer)
```

A Redux app will typically only have a single store.

<h1 align="center">
Store Api
</h1>

A Redux store is just an object that holds the apps state, wrapped in a minimalist API.

The store has 3 methods:

```js
    getState()
    dispatch(action)
    subscribe(callback)
```
<h1 align="center">
Store Methods
</h1>

```js
    getState()
    //returns the store's current state

    dispatch(action)
    //Passes an action into the store's reducer telling it what info to update

    subscribe(callback)
    //Registers a callback to be triggered whenever the store updates.
    //Returns a function, which when invoked, unsubscribes the callback function from the store.
```

<h1 align="center">
Updating the store
</h1>

stores can only be triggered by dispatching actions:

```js
    store.dispatch(action);
```

An action in Redux is just a POJO:

 * a type key indicating the action being performed

 * an optional payload keys containing any new info


For example, the store for your Fruit Stand app would handle the inventory. 

You would use the following addOrange action to add an orange to the store's state.

Notice how it has a type of 'ADD_FRUIT' and a fruit payload of 'orange':

```js
    const addOrange = {
        type: "ADD_FRUIT",
        fruite: "orange",
    }
```

When store.dispatch() is called, the store passed its current state, along with the action being dispatched, to the reducer.

The reducer function taked the two arguments (state and action) and returns the next state.

Think of the reducer as a Redux app's traffic cop, routing new info to it's rightful place in the state.

A reducer for the Fruit Stand app looks like this:

```js
    const fruitReducer = (state =[], action) => {
        switch(action.type){
            case 'ADD_FRUIT':
                return [...state, action.fruit];
            default
                return state;
        }
    }
```

The reducer's state parameter provides a default value; this is the intial state of store prior to any actions. In this case, it's an empty array.

In Redux, the state is immutable, so the reducer must return a new array or object whenever the state changes.

Now that we defined a reducer function, you can now dispatch the addOrange action to the store.

```js
    console.log(store.getState()) // []
    store.dispatch(addOrange)
    console.log(store.getState()) //['orange']
```

<h1 align="center">
Subscribing to the store
</h1>

Once the store has processed a dispatch(), it triggers all its subscribers.

Subscribers are callbacks that can be added to the store via subscribe().

You can define a callback display and subscribe it ti the store;

```js
    const display = () => {
        console.log(store.getState());
    }

    const unsubscribeDisplay = store.subscribe(display);

    store.dispatch(addOrange); //['orange', 'orange']

    // display will no longer be invoked after store.dispatch()
    unsubscribeDisplay();

    store.dispatch(addOrange); //no ouput

```

In the example above, the store processed the dispatched action and then called all of its subscribers in response.

The only subscribers is your display callback which logs the current state when called.

<h1 align="center">
Reviewing a simple example
</h1>

look at app.js