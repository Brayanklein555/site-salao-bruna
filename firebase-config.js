const firebaseConfig = {
  apiKey: "AIzaSyAeWc728jnxFMyUenPMy6vLnzUvMeKUyCY",
  authDomain: "studio-klein.firebaseapp.com",
  projectId: "studio-klein",
  storageBucket: "studio-klein.appspot.com",
  messagingSenderId: "1060056697578",
  appId: "1:1060056697578:web:109c55d27fa8daee87a593"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
