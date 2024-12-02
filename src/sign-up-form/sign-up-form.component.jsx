import { useState } from "react";

import { creteAutUserWithEmailAndPassword } from "../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "../sign-up-form/sign-up-form.style.scss";
import Button from "../component/buttons/buttons.component";
const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

// console.log(defaultFormField);
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField;
    const handleSubmit = async (event) => {

        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Password do  not match");
            return
        };

        try {

            const response = await creteAutUserWithEmailAndPassword(email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormField({ ...formField, [name]: value })

    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span> Sign up With your email and password </span>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormInput
                        label="Display Name"
                        type="text"
                        required
                        onChange={handleChange}
                        name="displayName"
                        value={displayName}
                    />
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
                    <FormInput
                        required
                        onChange={handleChange}
                        type="password"
                        label='Confirm Password'
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                    <div>
                        <Button type="submit" > Sign Up </Button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SignUpForm;