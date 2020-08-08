import { AsyncStorage } from "react-native";
import { decks } from "./data";

export const MOBILE_FLASHCARS_STORAGE_KEY = "mobile-flashcards:storage";

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
