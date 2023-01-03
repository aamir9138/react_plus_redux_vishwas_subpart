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
