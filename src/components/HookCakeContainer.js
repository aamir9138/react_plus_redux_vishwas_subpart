// /* lecture 20 useSelector Hook */
// import React from 'react';
// import { useSelector } from 'react-redux';
// function HookCakeContainer() {
//   const numOfCakes = useSelector((state) => state.numOfCakes);
//   return (
//     <div>
//       <h2>Hook cake number of cakes - {numOfCakes}</h2>
//       <button>hook buy cake</button>
//     </div>
//   );
// }

// export default HookCakeContainer;

/* lecture 21 useDispatch Hook */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './redux';
function HookCakeContainer() {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Hook cake number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>hook buy cake</button>
    </div>
  );
}

export default HookCakeContainer;
