import ActionTypes from '../constants/ActionTypes';

const initialState = {
  productList: [],
  reload: false
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        productList: action.products
      }
    case ActionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        productList: action.products
      }
      case ActionTypes.RELOAD_DASHBOARD:
      return {
        ...state,
        reload: true
      }
    default:
      return state;
  }
}