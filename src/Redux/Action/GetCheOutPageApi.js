import {
  GET_COUNTRIES,
  PAYMENT_GATEWAY,
  GET_SHIPPING_METHOD,
  SELECTED_SHIPPING_DATA,
} from "../ActionTypes/ActionType";
import api from "../Api";

export const GetCountries = () => async (dispatch) => {
  const getCountries = await api.get("/data/countries");
  dispatch({
    type: GET_COUNTRIES,
    payload: getCountries.data,
  });
};
export const PaymentGateway = () => async (dispatch) => {
  const PaymentGateway = await api.get("/payment_gateways");
  dispatch({
    type: PAYMENT_GATEWAY,
    payload: PaymentGateway.data,
  });
};
export const ShippingMethod = () => async (dispatch) => {
  const GetshippingData = await api.get("/shipping/zones/0/methods");
  dispatch({
    type: GET_SHIPPING_METHOD,
    payload: GetshippingData.data,
  });
};
