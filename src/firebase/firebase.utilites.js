import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const FirebaseConfig = {
   //your config plz
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
