import {
    signOut,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { auth } from "./config.js";
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html";
    }
  });
  
  const btn = document.querySelector(".nav-btn");
  
  btn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        window.location = "login.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });