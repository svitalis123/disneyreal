import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyClTSa0-QI0iOssctY7y__qqVrCTfCvYwk",
    authDomain: "disney-fbe0d.firebaseapp.com",
    projectId: "disney-fbe0d",
    storageBucket: "disney-fbe0d.appspot.com",
    messagingSenderId: "755033251586",
    appId: "1:755033251586:web:1174e0c1bdb36f13c7ec1b"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  
  export {auth, provider, storage}
  export default db