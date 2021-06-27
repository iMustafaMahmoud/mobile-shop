const initialState = {
  products: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET": {
      let products = [...state.products];
      const productIndex = products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        products[productIndex].quantity++;
      } else {
        products = [...products, action.payload];
      }
      return {
        ...state,
        products: [...products],
      };
    }
    case "REMOVE_PRODUCT_FROM_BASKET": {
      let products = [...state.products];
      const productIndex = products.findIndex(
        (product) => product.id === action.payload.productId
      );
      if (productIndex !== -1 && products[productIndex].quantity !== 1) {
        products[productIndex].quantity--;
      } else {
        products = products.filter((product) => {
          console.log(
            "remove",
            product.id,
            action.payload,
            product.id === action.payload.productId
          );
          return product.id !== action.payload.productId;
        });
      }
      return {
        ...state,
        products: [...products],
      };
    }
    default:
      return state;
  }
}
