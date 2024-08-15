import {
    signInWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(email.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            location.href = "index.html"


        })
        .catch((error) => {
            const errorMessage = error.message;
        });

})