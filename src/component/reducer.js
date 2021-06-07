export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((currElem) => {     //because item is inside the state
        return currElem.id !== action.payload;    //id is passed in the form of action.payload
      }),
    };
  }

  if(action.type==="CLEAR_CART"){
    return {
      state,
      item:[]
    }
  }
  return state;
};
