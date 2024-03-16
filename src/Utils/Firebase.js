import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8s6I_q9LwXYfmNKnD5PwIZtewQLVEOTM",
  authDomain: "netflix-107f1.firebaseapp.com",
  projectId: "netflix-107f1",
  storageBucket: "netflix-107f1.appspot.com",
  messagingSenderId: "849619100909",
  appId: "1:849619100909:web:b78c9ab61db966600158e4",
  measurementId: "G-CBWF8C2HY9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
