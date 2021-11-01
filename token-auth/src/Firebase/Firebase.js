import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {

};

// check for firebase init status and initialise using configuration settings
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

//auth
export const authentication = firebase.auth();
export {firebase}