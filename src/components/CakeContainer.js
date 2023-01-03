// /* lecture 14 React Redux Setup */
// function CakeContainer() {
//   return (
//     <div>
//       <h2>Number of cakes</h2>
//       <button>Buy Cake</button>
//     </div>
//   );
// }

// export default CakeContainer;

/* lecture 18 Connect */
import { buyCake } from './redux';
import { connect } from 'react-redux';
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
