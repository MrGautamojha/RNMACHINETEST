import {
  UPDATE_APP_STATE,
  UPDATE_BULK_APP_STATE,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from './types';

const initialState = {
  userData: [],
  loggedIn: false,
  showAlertMessage: false,
  count: 20,
  language: 'EN', //'EN', "AR"
  cart: new Object(),
  cartvalu:0
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const {name, value} = action.payload;
      const newState = {...state, [name]: value};
      return newState;
    }
    case UPDATE_BULK_APP_STATE: {
      const {values} = action.payload;
      const newState = {...state, ...values};
      return newState;
    }
    case ADD_TO_CART: {
      state.cart[action.payload[0]] = action.payload[1];
      console.log('cart', state.cart);

      const newState = {...state};
      return newState;
    }
    case DELETE_FROM_CART: {
      delete state.cart[action.payload];
      console.log(action.payload);
      const newState = {...state};
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
