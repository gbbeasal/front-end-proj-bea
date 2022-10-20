
export const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, {...action.payload, qty:1}]}
        case "REMOVE_FROM_CART":
            return {
                ...state, 
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
            }
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((cartItem) =>
                  cartItem.id === action.payload.id ? (cartItem.qty = action.payload.qty) : cartItem.qty)
              };
        default:
            return state;   
    }
};