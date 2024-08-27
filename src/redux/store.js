import { createStore } from "redux";
import initialState from "./initialState";
import strContains from "../utils/strContains";

//selectors
export const getFilteredCards = ({ cards, filterCards }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, filterCards)
  );

export const getAllColumns = ({ columns }) => columns;

// action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const filterCards = (payload) => ({ type: "FILTER_CARDS", payload });

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return { ...state, columns: [...state.columns, action.payload] };

    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.payload] };

    case "FILTER_CARDS":
      return { ...state, filterCards: action.payload };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;