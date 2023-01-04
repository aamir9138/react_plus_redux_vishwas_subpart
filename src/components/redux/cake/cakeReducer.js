// /* lecture 16 Reducers */
// import { BUY_CAKE } from './cakeTypes';

// const initialState = {
//   numOfCakes: 10,
// };

// const cakeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

// export default cakeReducer;

/* lecture 25 Action payload */
import { BUY_CAKE } from './cakeTypes';
const initialState = {
  numOfCakes: 10,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
export default cakeReducer;
