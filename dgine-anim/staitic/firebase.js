import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4oFTVDWdIq_0pExXiLERsjHHVGgeA3c4",
  authDomain: "dukee-52d71.firebaseapp.com",
  projectId: "dukee-52d71",
  storageBucket: "dukee-52d71.firebasestorage.app",
  messagingSenderId: "943776051296",
  appId: "1:943776051296:web:71bd2006061ad523f99305",
  measurementId: "G-LQ292TT10R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);