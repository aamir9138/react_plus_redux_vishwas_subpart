// /* lecture 14 React Redux Setup */
// import './App.css';
// import CakeContainer from './components/CakeContainer';

// function App() {
//   return (
//     <div className="App">
//       <CakeContainer />
//     </div>
//   );
// }

// export default App;

// /* lecture 17 Store */
// import { Provider } from 'react-redux';
// import store from './components/redux/Store';
// import './App.css';
// import CakeContainer from './components/CakeContainer';

// function App() {
//   return (
//     //doing so will provide store down to all the components
//     <Provider store={store}>
//       <div className="App">
//         <CakeContainer />
//       </div>
//     </Provider>
//   );
// }

// export default App;

/* lecture 20 useSelector Hook */
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    //doing so will provide store down to all the components
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
