// /* lecture 15 Actions */
// import { BUY_CAKE } from './cakeTypes';

// export const buyCake = () => {
//   return {
//     type: BUY_CAKE,
//   };
// };

/* lecture 25 Action payload */
import { BUY_CAKE } from './cakeTypes';
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
