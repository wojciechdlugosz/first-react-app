const filterCardsReducer = (statePart = "", action) => {
    switch (action.type) {
      case "FILTER_CARDS":
        return action.payload;
      default:
        return statePart;
    }
  };
  
  export default filterCardsReducer;