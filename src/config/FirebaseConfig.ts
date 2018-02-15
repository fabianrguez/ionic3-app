import * as _firebase from 'firebase';

const config = {
  apiKey: "AIzaSyASInf8-LQln1jfnDY_xaBE01rYxheJHyo",
  authDomain: "esmemapp.firebaseapp.com",
  databaseURL: "https://esmemapp.firebaseio.com",
  projectId: "esmemapp",
  storageBucket: "esmemapp.appspot.com",
  messagingSenderId: "673775114959"
};

export const Firebase = _firebase.initializeApp(config);
