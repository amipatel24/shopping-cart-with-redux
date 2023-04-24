import { GET_USER, USERS_ERROR } from "../ActionTypes/ActionType";
import api from "../Api";

export const getUsers = (prams) => async (dispatch) => {
  console.log(prams);

  try {
    const res = await api.get("/products", {
      params: {
        per_page: prams.per_page,
        offset: prams.offset,
        orderby: "date",
        order: "desc",
        status: "publish",
      },
    });
    console.log("Api", res);
    dispatch({
      type: GET_USER,
      payload: res.data,
      headers: res.headers,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
