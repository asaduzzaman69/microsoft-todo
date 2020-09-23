import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const FirebaseConfig = {
    apiKey: "AIzaSyBU-9vIjsIZqZe-m3koazzxSy0G7J0NQQA",
    authDomain: "todo-app-3d55f.firebaseapp.com",
    databaseURL: "https://todo-app-3d55f.firebaseio.com",
    projectId: "todo-app-3d55f",
    storageBucket: "todo-app-3d55f.appspot.com",
    messagingSenderId: "42111802593",
    appId: "1:42111802593:web:ebd6dfdda7e845aeee2ba0",
    measurementId: "G-KCNPXP8EFF"
}
firebase.initializeApp(FirebaseConfig);



export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const docRef = await firestore.doc(`user/${userAuth.uid}`)
    const snapSHot = await docRef.get();
    if(!snapSHot.exists) {
        const {displayName,email} = userAuth;
        const createdAt = new Date()
        docRef.set({
            email,
            displayName,
            createdAt,
            ...additionalData
        }) 

    }
    return docRef;

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();