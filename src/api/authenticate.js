import * as firebase from 'firebase';

export const app = firebase.initializeApp({
  apiKey: "AIzaSyASHiN3vBClV-FyR7ktGNsKmh84_kFqC8o",
  authDomain: "recetario-cdec8.firebaseapp.com",
  databaseURL: "https://recetario-cdec8.firebaseio.com",
  projectId: "recetario-cdec8",
  storageBucket: "recetario-cdec8.appspot.com",
  messagingSenderId: "47772195538"
});


export function authenticate(app) {
  return app.auth().signInWithEmailAndPassword('anaturrillo@gmail.com', 'juan3984');
}
