import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, updateDoc, increment, getDocs, query, orderBy, limit, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbOoj2cIBWihw4fg7p2wVk4IKpZOiCeMQ",
  authDomain: "third-facility-452612-c5.firebaseapp.com",
  projectId: "third-facility-452612-c5",
  storageBucket: "third-facility-452612-c5.firebasestorage.app",
  messagingSenderId: "506424646434",
  appId: "1:506424646434:web:362f48dbfcf15075dba37b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Tracking Helper
export async function trackReferralPurchase(referralNumber: string) {
  if (!referralNumber) return;
  const cleanNumber = referralNumber.replace(/\D/g, "");
  if (cleanNumber.length < 10) return;

  const docRef = doc(db, "affiliates", cleanNumber);
  
  try {
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      await updateDoc(docRef, {
        score: increment(1),
        updatedAt: new Date().toISOString()
      });
    } else {
      await setDoc(docRef, {
        score: 1,
        updatedAt: new Date().toISOString()
      });
    }
  } catch (err) {
    console.error("Error tracking referral:", err);
  }
}

export async function getTopAffiliates() {
  try {
    const q = query(collection(db, "affiliates"), orderBy("score", "desc"), limit(50));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      whatsapp: doc.id,
      score: doc.data().score || 0
    }));
  } catch (err) {
    console.error("Error fetching top affiliates:", err);
    return [];
  }
}
