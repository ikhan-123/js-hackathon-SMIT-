import { createUserWithEmailAndPassword 

}
 from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";




const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const myFiles = document.querySelector("#files");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    // const userData = {
    //     firstName: firstName.value,
    //     lastName: lastName.value,
    //     email: email.value,
    //     password: password.value,
    //     Files: myFiles.File

    // };

    createUserWithEmailAndPassword(auth, email.value, password.value)

        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = "login.html"


        })
        .catch((error) => {
            const errorMessage = error.message;

        });


})