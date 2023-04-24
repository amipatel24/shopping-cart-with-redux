import {
  GET_COUPONS,
  FAILED_COUPONS,
  APPLY_COUPONS_DATA,
} from "../ActionTypes/ActionType";
import api from "../Api";

export const GetCoupons = () => async (dispatch) => {
  try {
    const getCoupons = await api.get("/coupons");
    console.log("getCouponsApi====>", getCoupons);
    dispatch({
      type: GET_COUPONS,
      payload: getCoupons.data,
    });
  } catch (e) {
    dispatch({
      type: FAILED_COUPONS,
      payload: console.log(e),
    });
  }
};

export const ApplyCouponsData = (myRe) => async (dispatch) => {
  console.log("ApplyCouponsData", myRe);

  dispatch({
    type: APPLY_COUPONS_DATA,
    payload: myRe,
  });
};
