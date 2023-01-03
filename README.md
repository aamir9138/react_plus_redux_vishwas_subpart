## lecture 14 React Redux Setup

1. `npx create-react-app react_plus_redux_vishwas_subpart`
2. install the 2 packages `npm install redux react-redux`
3. create a `component` folder
4. create a component in the folder name it `CakeContainer.js`
5. import this component in `App.js`

```
/* lecture 14 React Redux Setup */
function CakeContainer() {
  return (
    <div>
      <h2>Number of cakes</h2>
      <button>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
```

```
/* lecture 14 React Redux Setup */
import './App.css';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App">
      <CakeContainer />
    </div>
  );
}

export default App;
```

## lecture 15 Actions

1. create a `redux` folder in `components` folder
2. create a `cake` folder inside `redux` folder
3. in `cake` folder create `cakeActions.js` and `cakeTypes.js`
4. in `cakeTypes.js` define a const whose value is a string and export it.

```
/* lecture 15 Actions */
// export an constant whose value is a string
export const BUY_CAKE = 'BUY_CAKE';
```

5. in `cakeActions.js` define an action creator `buyCake()` and export it.

```
/* lecture 15 Actions */
import { BUY_CAKE } from './cakeTypes';

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
```

## lecture 16 Reducers

create a component `cakeReducer.js`. define the initialState, cakeReducer and then export it.

```
/* lecture 16 Reducers */
import { BUY_CAKE } from "./cakeTypes"

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE:
      return {
        ...state, numOfCakes: state.numOfCakes -1
      }
    default:
      return state
  }
}

export default cakeReducer
```

## lecture 17 Store

let us create our Redux store. and provide it to our react application. create a component `Store.js` in redux folder.

1. createStore and pass cakeReducer to it.
2. assign it to `const store` and then export it.

```
/* lecture 17 Store */
import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer)

export default store
```

we have created our `redux store` using redux. the next step is to `provide it to the react application`. and this is where the `react-redux` library makes it first appearance.

To provide the `redux store` to our react application. the `react-redux` library exports a component called `provider`.

### react redux provider

1. in `App.js` file import `provider` from `react-redux`.
2. wrap the outermost div by the `provider` component.
3. import `store` from the `./redux/store`.
4. apply this `store` as a `prop` to the `provider` tag. doing so will provide the redux store down to all the components.

```
/* lecture 17 Store */
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import './App.css';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    //doing so will provide store down to all the components
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
```

The next thing to understand is how our react component can `dispatch` an action and `subscribe` to changes in the `store`

## lecture 18 Connect

let us learn the final bit. how do we get hold of the redux state and how do we dispatch actions from within the react component.

- go to `CakeContainer.js` component. it is the container where we want to display the number of cakes which is the part of the redux state and this is also the component from where we want to dispatch the `buyCake` action on a button click.

- we are going to achieve the result in 3 steps.

1. we are going to define a new function. this function is called `const mapStateToProps()`. This function gets the redux state as a parameter and returns an object. in our example we just have one state property that we want to access. and that is the number of cakes.

```
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}
```

in react-redux documentation `selector` is a term used for a separate file where we return the states of the redux. but here we are not doing it as it is a simple state.

2. we will define a new function called `const mapDispatchToProps()`. This function gets the redux `dispatch` method as a parameter and again returns an object. As we have only one action creator in our application so we are going to return a property `buyCake` which is going to be equal to an arrow function which dispatches the action creator from redux.

- export the `buyCake` from `/redux/index.js`. and import it in `CakeContainer.js`

```
/* lecture 18 Connect */
export { buyCake } from './cake/cakeActions';
```

```
import { buyCake } from './redux';
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
```

3. now we are going to connect these two functions with our react component. for that we use the `connect` function or the `connect` higher order component from react-redux library.

```
import { connect } from 'react-redux';
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
```

we can now use these as `props` in our component.

## lecture 19 React Redux with Hooks

React Hooks were introduced after this. hooks basically gives functional component the ability to keep track of component states, execute sideEffects and more.

in React Redux v7.1 hooks have been added. so react-redux now provide a set of hook API as an alternative to existing `connect` higher order component.

The API allows you to subscribe to the redux store and dispatch actions without having to wrap your components with `connect()`.

so next lectures we will understand how to use hooks instead of `connect()`
