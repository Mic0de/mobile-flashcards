import { AsyncStorage } from "react-native";
import { decks } from "./data";

export const MOBILE_FLASHCARS_STORAGE_KEY = "mobile-flashcards:storage";

function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export async function getAllDecks() {
  const data = await AsyncStorage.getItem(MOBILE_FLASHCARS_STORAGE_KEY);
  console.log('data', data)

  if (data === null) {
    AsyncStorage.setItem(MOBILE_FLASHCARS_STORAGE_KEY,  JSON.stringify(decks));
    console.log('decks', decks)
    return decks;
  }

  return JSON.parse(data);
}

//  function for formatting a new deck by just applying a title & using title as the ID
export function formatNewDeck(givenTitle){
  return {
    // TODO: consider a unique title (generateID()), but I will have to refactor to be able to access this ID in the reducers
    [givenTitle] : {
      "title": givenTitle,
      "questions": [

      ]
    }
  }
}
