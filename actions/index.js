export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_DECK = "REMOVE_DECK";
export const REMOVE_CARD = "REMOVE_CARD";

export function receiveData(decks) {
  return {
    type: RECEIVE_DATA,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function addCard(card, deck) {
  return {
    type: ADD_CARD,
    card,
    deck,
  };
}

export function removeDeck(deck) {
  return {
    type: REMOVE_DECK,
    deck,
  };
}

// May not be needed
export function removeCard(card, deck) {
  return {
    type: REMOVE_CARD,
    card,
    deck,
  };
}
