//selectors
export const getSearchString = ({ filterCards }) => filterCards;

//actions
const createActionName = actionName => `app/filterCards/${actionName}`;
const FILTER_CARDS = createActionName('FILTER_CARDS');

// action creators
export const changeFilterCards = (payload) => ({ type: FILTER_CARDS, payload });

const filterCardsReducer = (statePart = "", action) => {
  switch (action.type) {
    case FILTER_CARDS:
      return action.payload;
    default:
      return statePart;
  }
};
  
  export default filterCardsReducer;