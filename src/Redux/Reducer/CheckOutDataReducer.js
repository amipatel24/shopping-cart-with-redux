import { GET_COUNTRIES,PAYMENT_GATEWAY, GET_SHIPPING_METHOD, SELECTED_SHIPPING_DATA } from "../ActionTypes/ActionType";
const initialstate = {
  CountriesData : [],
  PaymentGatewayData : [],
  ShippingApiData : [],
  shipping_loader : true,
 
}
console.log('mailstate========>',initialstate.ShippingApiLoading);
const CheckOutDataReducer = (state = initialstate, action) => {
  console.log("amisha======>",state.SelectedShippingData);
  console.log("updatedshippingdata===>",state.ShippingApiData);
      switch (action.type) {
        case GET_COUNTRIES:
          return {
            ...state,
            CountriesData: action.payload,
            loading: false
           
          } 
        case PAYMENT_GATEWAY:
          return{
            ...state,
            PaymentGatewayData:action.payload

          }
          case GET_SHIPPING_METHOD:
           
            return{
              ...state,
              ShippingApiData:action.payload,
              shipping_loader : false

            }
            // case  SELECTED_SHIPPING_DATA :
            //   console.log("selectedshippingdata======>",action.payload);
             
           
            // return {
            //   ...state,
            //   SelectedShippingData : action.payload
            // }
            
        default:
          return state;
      }
    };
    export default CheckOutDataReducer;