/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCyR3olnJkKoHj59Krs9PlIuSfACsqV-BU",
  authDomain: "friendlychat-2f3ae.firebaseapp.com",
  projectId: "friendlychat-2f3ae",
  storageBucket: "friendlychat-2f3ae.appspot.com",
  messagingSenderId: "335603886452",
  appId: "1:335603886452:web:3c2a2ebc8e45a1a2faa421"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}