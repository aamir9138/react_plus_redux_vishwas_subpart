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
