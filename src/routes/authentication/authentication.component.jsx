
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import './authentication.style.scss'

const Authentication =  () => {

    // useEffect(() => {
    //     const handleRedirectResult = async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     handleRedirectResult();
       
    
    // }, []);
    
   
    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log(user);
      

    // }
    
    return (
        <div className="authentication-container">
          
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}> Sign in with google Redirect</button> */}
       </div> 
    )
}

export default Authentication;