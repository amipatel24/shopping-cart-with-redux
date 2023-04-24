import { ADD_TO_CART , DELETE_CART, UPDATE_CART_QTY  } from "../ActionTypes/ActionType";
export const addToProductCart = (item) => async (dispatch) => {
    dispatch( {
        type: ADD_TO_CART,
        payload : item
    })
}
export const deleteItem = (id) => (dispatch) => {
    dispatch({
        type:DELETE_CART,
        payload:id
    })
}
export const updateCartQty = (cartData) => (dispatch) => {
    dispatch({
        type: UPDATE_CART_QTY,
        payload: cartData
    })
}