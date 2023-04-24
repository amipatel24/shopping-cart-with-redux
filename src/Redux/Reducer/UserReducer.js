import { GET_USER } from "../ActionTypes/ActionType";
const initialstate = {
    products : [],
    perPage:6,
    totalProducts:0,
    totalPages:0,
    loading:true,
   
}

const userReducer = (state = initialstate, action) => {
  
  
      switch (action.type) {
        case GET_USER:
          return {
            ...state,
            products:action.payload,
            totalProducts:action.headers['x-wp-total'],
            totalPages:Math.ceil(action.headers['x-wp-total']/initialstate.perPage),
            loading:false
          }
        
        default:
          return state;
      }
    };
    export default userReducer;