/* lecture 22 Cakes and Ice Creams*/
import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from './redux';

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>number of icecream - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>buy icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
