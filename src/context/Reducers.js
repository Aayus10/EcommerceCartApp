export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "RESET_FILTERS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, bystock: !state.bystock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastdelivery: !state.byFastdelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "SEARCH_FILTERS":
      return { ...state, searchquery: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sort: undefined,
        bystock: false,
        byFastdelivery: false,
        byRating: 0,
        searchquery: "",
      };

    default:
      return state;
  }
};
