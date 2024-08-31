import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import strContains from "../utils/strContains";
import listsReducer from "./listsRedux";
import columnsReducer from "./columnsRedux";
import cardsReducer from "./cardsRedux";
//import filterCardsReducer from "./filterCardsRedux";

//selectors
export const getFilteredCards = ({ cards, filterCards }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, filterCards)
  );

export const getAllColumns = ({ columns }) => columns;

export const getAllLists = ({ lists }) => lists;

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const getSearchString = ({ filterCards }) => filterCards;

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);

// action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const changeFilterCards = (payload) => ({ type: "FILTER_CARDS", payload });
export const addList = (payload) => ({ type: "ADD_LIST", payload });
export const toggleCardFavorite = (payload) => ({
  type: "TOGGLE_CARD_FAVORITE",
  payload,
});

const filterCardsReducer = (statePart = "", action) => {
  switch (action.type) {
    case "FILTER_CARDS":
      return action.payload;
    default:
      return statePart;
  }
};

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  filterCards: filterCardsReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;