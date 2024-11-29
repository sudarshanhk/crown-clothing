
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 
    
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}  from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAbKPNAZPgLD_q9OzBa6czJ7QnE7vsN5A",
    authDomain: "crown-clothing-8a766.firebaseapp.com",
    projectId: "crown-clothing-8a766",
    storageBucket: "crown-clothing-8a766.firebasestorage.app",
    messagingSenderId: "198544366778",
    appId: "1:198544366778:web:6ed40c22543c70b0373683"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt :"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users', userAuth.uid);
     console.log(userDocRef);
     const userSnapShot = await getDoc(userDocRef);
     console.log(userSnapShot.exists());

     if (!userSnapShot.exists()) { 
         const { displayName, email } = userAuth;
         const createdAt = new Date();

         try {
             await setDoc(userDocRef, {
                displayName,email,createdAt
            }) 
         } catch (error) {
             
         }
     };
     return userDocRef

}