import { useState } from "react";

import { createUserDocumentFromAuth, creteAutUserWithEmailAndPassword, signInWithGooglePopup, signInAutUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../buttons/buttons.component";
const defaultFormField = {
   
    email: "",
    password: "",
   
}

// console.log(defaultFormField);
const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField;
    const handleSubmit = async (event) => {

        event.preventDefault(); 
        const resetFormField = () => {
           setFormField(defaultFormField)
       }
        try {
            const response = await signInAutUserWithEmailAndPassword(email, password);
            console.log(response)
            resetFormField();
        } catch (error) {
            if (error.code == "auth/invalid-credential"); {
                alert("invalid credentials")
            }
        }
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
       await createUserDocumentFromAuth(user)

    }
    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormField({ ...formField, [name]: value })

    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span> Sign in With your email and password </span>
            <form onSubmit={handleSubmit}>
                <div>
                   
                    <FormInput
                        required
                        onChange={handleChange}
                        type="email"
                        label='Email'
                        name="email"
                        value={email}
                    />
                    <FormInput
                        label='Password'
                        required
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={password}
                    />
                   
                    <div className="buttons-container">
                        <Button type="submit" > Sign In </Button>
                        <Button type='button' buttonType='google' onClick={signInWithGoogle} > Sign In With Google </Button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SignInForm;