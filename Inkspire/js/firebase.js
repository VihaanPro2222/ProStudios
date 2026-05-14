// =========================================
// FILE: js/firebase.js
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCu2IYN5UMVxTRoSY2qepYCBYnEANSX_Qs",
    authDomain: "inkspire-library.firebaseapp.com",
    projectId: "inkspire-library",
    storageBucket: "inkspire-library.firebasestorage.app",
    messagingSenderId: "274107861765",
    appId: "1:274107861765:web:7327d90104578bdc5ec56c"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);