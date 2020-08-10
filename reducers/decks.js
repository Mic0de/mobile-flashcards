import {
    RECEIVE_DATA,
    ADD_DECK,
    ADD_CARD,
    REMOVE_DECK,
    REMOVE_CARD,
  } from "../actions";
  
  function decks(state = {}, action) {
    switch (action.type) {
      case RECEIVE_DATA:
        return {
          ...state,
          ...action.decks,
        };
      case ADD_DECK: // TODO
        return {
          ...state,
          ...action.deck,
        };
      case ADD_CARD: // TODO
        return {
          ...state,
          ...action.entry,
        };
      case REMOVE_DECK: // TODO
        return {
          ...state,
        };
      case REMOVE_CARD: // may not be needed
        return {
          ...state,
        };
  
      default:
        return state;
    }
  }
  
  export default decks;
  