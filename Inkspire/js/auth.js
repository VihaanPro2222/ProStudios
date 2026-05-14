// =========================================
// FILE: js/auth.js
// =========================================

import { auth } from "./firebase.js";

import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// =========================================
// SIGNUP
// =========================================

const signupBtn = document.getElementById("signupBtn");

if(signupBtn){

  signupBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try{

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully!");

      window.location.href = "library.html";

    } catch(error){

      alert(error.message);

    }

  });

}



// =========================================
// LOGIN
// =========================================

const loginBtn = document.getElementById("loginBtn");

if(loginBtn){

  loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try{

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful!");

      window.location.href = "library.html";

    } catch(error){

      alert(error.message);

    }

  });

}