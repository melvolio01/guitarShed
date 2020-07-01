import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5nd2RaeVRp8eoRUwPhj9UhJpqZTKY6T0",
    authDomain: "guitarshed-bf6e3.firebaseapp.com",
    databaseURL: "https://guitarshed-bf6e3.firebaseio.com",
    projectId: "guitarshed-bf6e3",
    storageBucket: "guitarshed-bf6e3.appspot.com",
    messagingSenderId: "778456493328",
    appId: "1:778456493328:web:3c1e64eb3939bc64d94995",
    measurementId: "G-K2VPKQ2JKW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, extraData) => {
    if (!userAuth) return;
    // userRef takes details from userAuth object and creates an entry in the firestore database (if one doesn't exist already)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // does the snapshot exist? if not set displayName, email, date etc on userRef, otherwise return already existing one
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const date = new Date();
        try {
            await userRef.set({
                // returns userRef with these properties...
                displayName,
                email,
                date,
                ...extraData
            })
        } catch (error) {
            console.log(`Error creating user: ${error.message}`)
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'consent' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;