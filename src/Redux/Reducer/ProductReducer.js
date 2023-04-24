import {GET_PRODUCT_DETAILS} from '../ActionTypes/ActionType'
const initialstate  = {
    oneProductdata : [],
    loading : true
}
const ProductReducer = (state = initialstate, action) => {
    switch (action.type) {
      case GET_PRODUCT_DETAILS:
        return {
          ...state,
          oneProductdata:action.payload[0],
          loading:false
         
        }
    
      default:
        return state;
    }
  };
  export default ProductReducer;