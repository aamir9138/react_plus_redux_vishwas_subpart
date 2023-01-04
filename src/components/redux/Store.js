// /* lecture 17 Store */
// import { createStore } from 'redux';
// import cakeReducer from './cake/cakeReducer';

// const store = createStore(cakeReducer);

// export default store;

/* lecture 22 Cakes and Ice Creams */
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
