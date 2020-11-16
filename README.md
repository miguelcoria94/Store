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
