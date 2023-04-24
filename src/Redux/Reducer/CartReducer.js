import { ADD_TO_CART, DELETE_CART, UPDATE_CART_QTY } from "../ActionTypes/ActionType";
import { placeholderImage } from '../../images'
const init = {
  cartTotal: 0,
  itemTotal: 0,
  carts: [],
  loading : true
}

const CartReducer = (state = init, action) => {
  // console.log("itemtotal=====>",state.itemTotal);
  console.log("carttotal======>",state.cartTotal);
  switch (action.type) {
    case ADD_TO_CART:

      const cartstate = { ...state }
      const cartproducts = action.payload.data
      console.log("cartproducts", cartproducts);
      
      if (state.itemTotal == 0) {
        let cart = {
          id: cartproducts?.id,
          name: cartproducts?.name,
          type: cartproducts?.type,
          price: cartproducts?.price,
          slug: cartproducts?.slug,
          img: cartproducts?.images[0]?.src || placeholderImage,
          quantity: parseInt(action?.payload?.quantity)
        }
        console.log("quantity", cart.quantity);
        cartstate.carts.push(cart)
      }
      
      else {
        
        
        let check = false;
        cartstate.carts.map((item, key) => {
          if (item.id == cartproducts.id) {
            cartstate.carts[key].quantity = parseInt(cartstate.carts[key].quantity) + parseInt(action?.payload?.quantity)
            
            check = true;
          }
          
        });
        
        // console.log("AddToCartActionPayload", action.payload.quantity);
        if (!check) {
          let _cart = {
            id: cartproducts?.id,
            name: cartproducts?.name,
            type: cartproducts?.type,
            price: cartproducts?.price,
            slug: cartproducts?.slug,
            img: cartproducts?.images[0]?.src || placeholderImage,
            quantity: parseInt(action?.payload?.quantity)
          }
          cartstate.carts.push(_cart);
        }
      }
      return {
        ...state,
        itemTotal: state.itemTotal + parseInt(action.payload.quantity),
        cartTotal: parseInt(cartstate?.cartTotal) + parseInt(action?.payload?.quantity) * parseInt(cartproducts?.price)
      }
    case DELETE_CART:
      // console.log("action.payload==========>",action.payload);
      const key = action.payload
      let quantity_ = state.carts[key].quantity;
      let price_ = state.carts[key].price * quantity_
      return {
        ...state,
        itemTotal: state.itemTotal - quantity_,
        cartTotal: state.cartTotal - price_,
        carts: state.carts.filter((item) => {
          return item.id != state.carts[key].id
        })

      }
    case UPDATE_CART_QTY:
      const data = action.payload
      console.log("asdasdasdasdadsasdsd", data);
      // state.carts[data.id].quantity = data.qty
      let newState = state;
      let itemIndex = newState.carts.findIndex(item => item.id === data.id)
      newState.carts[itemIndex].quantity = data.qty
      
      console.log("checking", newState.carts);
      console.log("itemtotal=>",newState.itemTotal);
      
      let Totals = 0
      newState.carts.forEach(item => {
        Totals += parseInt(item.quantity) * parseInt(item.price)
      })
       let itemtotals = 0
      newState.carts.forEach(data => {
        itemtotals += parseInt(data.quantity)
      })
      console.log("totals",Totals);
      newState.cartTotal = Totals
      newState.itemTotal = itemtotals
      return {
        
        ...newState 

      }
    default:  
      return state;

  }
}
export default CartReducer;
