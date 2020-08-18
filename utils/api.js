import { AsyncStorage } from "react-native";
import { decks } from "./data";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export const NOTIFICATION_KEY = "mobile-flashcards:notifications";
export const MOBILE_FLASHCARS_STORAGE_KEY = "mobile-flashcards:storage";

function generateID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export async function getAllDecks() {
  const data = await AsyncStorage.getItem(MOBILE_FLASHCARS_STORAGE_KEY);
  console.log("data", data);

  if (data === null) {
    AsyncStorage.setItem(MOBILE_FLASHCARS_STORAGE_KEY, JSON.stringify(decks));
    console.log("decks", decks);
    return decks;
  }

  return JSON.parse(data);
}

//  function for formatting a new deck by just applying a title & using title as the ID
export function formatNewDeck(givenTitle) {
  return {
    // TODO: consider a unique title (generateID()), but I will have to refactor to be able to access this ID in the reducers
    [givenTitle]: {
      title: givenTitle,
      questions: [],
    },
  };
}

export function clearLocalNotification() {
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

export function createNotification() {
  return {
    title: "🔔Remember to Study!🔔 ",
    body: "📝Don't forget to study today!📝",
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            // tomorrow.setDate(tomorrow.getDate() + 1)
            // tomorrow.setHours(20)
            // tomorrow.setMinutes(0.5)
            tomorrow.setSeconds(tomorrow.getSeconds() + 5);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
