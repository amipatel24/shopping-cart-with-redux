import { GET_PRODUCT_DETAILS, FAILED_GETDATA } from "../ActionTypes/ActionType";
import api from "../Api";
export const getProduct = (slug) => async (dispatch) => {
  console.log("slug", slug);
  try {
    const getProductdata = await api.get(`/products/?slug=${slug}`);
    console.log("getProductdataApi=====>", getProductdata.data);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: getProductdata.data,
    });
  } catch (e) {
    dispatch({
      type: FAILED_GETDATA,
      payload: console.log(e),
    });
  }
};
