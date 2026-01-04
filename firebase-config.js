const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "studio-klein.firebaseapp.com",
  projectId: "studio-klein",
  storageBucket: "studio-klein.appspot.com",
  messagingSenderId: "1060056697578",
  appId: "SUA_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
