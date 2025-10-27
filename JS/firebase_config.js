// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js"

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  updateDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBLajwWMRPcUtYryjPGBw-spnVnv1D0ag4",
  authDomain: "videojuegotux.firebaseapp.com",
  projectId: "videojuegotux",
  storageBucket: "videojuegotux.appspot.com",
  messagingSenderId: "16193162585",
  appId: "1:16193162585:web:613af3ce8e338b9865d048",
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

async function createUserInFirestore(user) {
  try {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      created: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      highScore: 0,
    })
    console.log("Usuario guardado en Firestore")
  } catch (error) {
    console.error("Error guardando usuario:", error)
  }
}

async function updateUserLastLogin(user) {
  try {
    await setDoc(
      doc(db, "users", user.uid),
      {
        lastLogin: new Date().toISOString(),
      },
      { merge: true },
    )
    console.log("Último login actualizado:", user.email)
  } catch (error) {
    console.error("Error actualizando lastLogin:", error)
  }
}

async function saveUserScore(scoreData) {
  try {
    const user = auth.currentUser
    if (!user || !user.uid) throw new Error("Usuario no autenticado")

    const userUid = user.uid
    const userEmail = user.email

    // Guardar en colección scores con ID autogenerado (historial completo)
    await addDoc(collection(db, "scores"), {
      uid: userUid,
      email: userEmail,
      score: Number(scoreData.score),
      level: Number(scoreData.level),
      won: Boolean(scoreData.won),
      lives: Number(scoreData.lives || 0),
      timestamp: new Date().toISOString(),
    })

    // Actualizar highScore en users si el nuevo score es mayor
    const userRef = doc(db, "users", userUid)
    const userSnap = await getDoc(userRef)
    const currentHigh = userSnap.exists() ? (userSnap.data().highScore ?? 0) : 0
    if (Number(scoreData.score) > currentHigh) {
      await updateDoc(userRef, { highScore: Number(scoreData.score) })
    }

    console.log("Puntaje guardado:", scoreData.score, "uid:", userUid)
    return true
  } catch (err) {
    console.error("Error saveUserScore:", err)
    throw err
  }
}

async function getTopScores(limitCount = 10) {
  try {
    const scoresQuery = query(collection(db, "scores"), orderBy("score", "desc"), limit(limitCount))
    const querySnapshot = await getDocs(scoresQuery)
    const scores = []
    querySnapshot.forEach((doc) => {
      scores.push({ id: doc.id, ...doc.data() })
    })
    return scores
  } catch (error) {
    console.error("Error obteniendo top scores:", error)
    return []
  }
}

async function registerUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  await createUserInFirestore(userCredential.user)
  return userCredential
}

async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  await updateUserLastLogin(userCredential.user)
  return userCredential
}

export {
  auth,
  db,
  registerUser,
  loginUser,
  createUserInFirestore,
  updateUserLastLogin,
  saveUserScore,
  getTopScores,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
}
