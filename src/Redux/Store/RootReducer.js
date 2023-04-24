import userReducer from "../Reducer/UserReducer";
import CartReducer from '../Reducer/CartReducer';
import ProductReducer from '../Reducer/ProductReducer';
import CouponsReducer from '../Reducer/CouponsReducer';
import CheckOutDataReducer from '../Reducer/CheckOutDataReducer'
import CheckoutFormDataReducer from '../Reducer/CheckoutFormDataReducer'
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
const RootReducer = combineReducers({
    user:userReducer,
    cartuser:CartReducer,
    ProductReducer:ProductReducer,
    CouponsReducer:CouponsReducer,
    CheckOutDataReducer:CheckOutDataReducer,
   CheckOutFormData: CheckoutFormDataReducer,
     form: formReducer
})
export default RootReducer