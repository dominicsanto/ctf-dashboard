import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
