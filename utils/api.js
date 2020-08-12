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

// TODO: create function for formatting a new deck? give it a Title that's all.
export function formatNewDeck(givenTitle){
  return {
    [generateID()] : {
      "title": givenTitle,
      "questions": [

      ]
    }
  }
}
