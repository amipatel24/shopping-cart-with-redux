import {
  GET_CHECKOUTFORM_DATA,
  GET_SHIPPING_METHOD,
  SELECTED_SHIPPING_DATA,
  PAYMENT_GATEWAY,
  SELECTED_PAYMENT_DATA,
  POST_API_DATA,
} from "../ActionTypes/ActionType";
const init = {
  payment_method: "",
  payment_method_title: "",
  line_items: [],
  shipping_lines: [],

  coupon_lines: [],
  billing: {
    first_name: "",
    last_name: "",
    address_1: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    email: "",
    phone: "",
  },
  shipping: {
    first_name: "",
    last_name: "",
    address_1: "",
    city: "",
    postcode: "",
    country: "",
    state: "",
  },
  orderRecivedData: [],
  loading: true,
};

const CheckoutFormDataReducer = (state = init, action) => {
  console.log("orderRecivedData------->", state.orderRecivedData);
  switch (action.type) {
    case POST_API_DATA:
      return {
        ...state,
        orderRecivedData: action.payload,
        loading: false,
      };

    case GET_CHECKOUTFORM_DATA:
      const valuesdata = action.payload.val;
      let billingData = {
        first_name: valuesdata.first_name,
        last_name: valuesdata.last_name,
        address_1: valuesdata.address_1,
        city: valuesdata.city,
        postcode: valuesdata.postcode,
        email: valuesdata.email,
        phone: valuesdata.phone,
        country: valuesdata.country,
        state: valuesdata.state,
      };
      let shippingData = {
        first_name: valuesdata?.Shipping_first_name
          ? valuesdata.Shipping_firstName
          : valuesdata.first_name,
        last_name: valuesdata?.Shipping_last_name
          ? valuesdata.Shipping_lastName
          : valuesdata.last_name,
        address_1: valuesdata?.Shipping_address_1
          ? valuesdata.Shipping_Streetaddress
          : valuesdata.address_1,
        city: valuesdata?.Shipping_city
          ? valuesdata.Shipping_city
          : valuesdata.city,
        postcode: valuesdata?.Shipping_postcode
          ? valuesdata.Shipping_pincode
          : valuesdata.postcode,
        country: valuesdata?.Shipping_country
          ? valuesdata.Shipping_Country
          : valuesdata.country,
        state: valuesdata?.Shipping_state
          ? valuesdata.Shipping_state
          : valuesdata.state,
      };

      state.line_items = [];
      const ordersdata = action.payload.data1;
      ordersdata.map((data) => {
        let line_item = {
          product_id: data.id,
          quantity: data.quantity,
        };
        state.line_items.push(line_item);
      });
      state.coupon_lines = [];
      let FinalApplycouponsData = {
        code: action.payload?.coupons?.code || "",
        discount: action.payload?.coupons?.amount || "",
      };
      state.coupon_lines.push(FinalApplycouponsData);

      return {
        ...state,
        billing: billingData,
        shipping: shippingData,
      };
    case GET_SHIPPING_METHOD:
      state.shipping_lines = [];
      let shipping_line_data = {
        method_id: action.payload[0].method_id,
        method_title: action.payload[0].method_title,
        total: action.payload[0]?.settings?.cost?.value || "0",
      };
      state.shipping_lines.push(shipping_line_data);
      return {
        ...state,
      };
    case SELECTED_SHIPPING_DATA:
      console.log(
        "action.payload?.settings?.cost?.value",
        state.shipping_lines
      );

      state.shipping_lines = [];
      let shipping_line_Selected_data = {
        method_id: action.payload?.method_id,
        method_title: action.payload?.method_title,
        total: action.payload?.settings?.cost?.value || "0",
      };
      state.shipping_lines.push(shipping_line_Selected_data);

      return {
        ...state,
        // shipping_lines :shipping_line_Selected_data
      };
    case PAYMENT_GATEWAY:
      return {
        ...state,
        payment_method: action.payload[0].id,
        payment_method_title: action.payload[0].title,
      };
    case SELECTED_PAYMENT_DATA:
      let selectedpymentdata = action.payload;

      return {
        ...state,
        payment_method: selectedpymentdata.id,
        payment_method_title: selectedpymentdata.title,
      };

    default:
      return state;
  }
};
export default CheckoutFormDataReducer;
