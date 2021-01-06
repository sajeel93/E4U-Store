
const CartReducer = (state, action) => {

    const {shoppingCart, totalPrice, qty} = state;

    let prodct;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type) {
        case 'ADD_TO_CART':
          const check = shoppingCart.find(val => val.id === action.id)
          if(check){
              return state;
          }
          else {
              prodct = action.product;
              prodct['qty'] = 1;
              updatedPrice = totalPrice + prodct.price;
              updatedQty = qty + 1;
              return {shoppingCart: [prodct, ...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
          }
          

        case 'INC':
            prodct = action.item;
            prodct.qty = prodct.qty + 1;
            updatedPrice = totalPrice + prodct.price;
            updatedQty = qty + 1;
            index = shoppingCart.findIndex(value => value.id === action.id);
            shoppingCart[index] = prodct;
            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            
        case 'DEC':
            prodct =action.item;
            if(prodct.qty > 1) {
                prodct.qty = prodct.qty -1;
                updatedPrice = totalPrice - prodct.price;
                updatedQty = qty - 1;
                index = shoppingCart.findIndex(val => val.id === action.id);
                shoppingCart[index] = prodct;
                return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            }   
            else {
                return state;
            } 

        case 'DELETE':
            const filterCart = shoppingCart.filter(val => val.id !== action.id)
            prodct = action.item;
            updatedQty = qty - prodct.qty;
            updatedPrice = totalPrice - prodct.price * prodct.qty;
            return{shoppingCart: [...filterCart], totalPrice: updatedPrice, qty: updatedQty}
        
        default:
            return state;
      
    }

}
export default CartReducer;