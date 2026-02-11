import { initializeApp, getApps } from "firebase/app"
import {
  doc,
  getDoc,
  getFirestore,
  increment,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore"

function getFirebaseConfig() {
  const apiKey =
    import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAxBU5nph4RomelNFo_9H7V0VQeE3DC2cc"
  const authDomain =
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "live-cv-91386.firebaseapp.com"
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || "live-cv-91386"
  const storageBucket =
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "live-cv-91386.firebasestorage.app"
  const messagingSenderId =
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "582585237972"
  const appId =
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:582585237972:web:273235968376c0887e9641"
  const measurementId =
    import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-JS8L7EWZF6"

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  }
}

function getApp() {
  if (getApps().length) return getApps()[0]
  return initializeApp(getFirebaseConfig())
}

export function getDb() {
  return getFirestore(getApp())
}

export async function readCounter(counterId) {
  const db = getDb()
  const ref = doc(db, "counters", counterId)

  const snap = await getDoc(ref)
  if (!snap.exists()) return 0

  const data = snap.data()
  return typeof data?.value === "number" ? data.value : 0
}

export async function incrementCounter(counterId, by = 1) {
  const db = getDb()
  const ref = doc(db, "counters", counterId)

  await runTransaction(db, async tx => {
    const snap = await tx.get(ref)
    if (!snap.exists()) {
      tx.set(ref, {
        value: by,
        updatedAt: serverTimestamp(),
      })
      return
    }

    tx.update(ref, {
      value: increment(by),
      updatedAt: serverTimestamp(),
    })
  })

  return readCounter(counterId)
}

export async function ensureCounter(counterId) {
  const db = getDb()
  const ref = doc(db, "counters", counterId)

  const snap = await getDoc(ref)
  if (snap.exists()) return

  await setDoc(ref, {
    value: 0,
    updatedAt: serverTimestamp(),
  })
}

export async function touchCounter(counterId) {
  const db = getDb()
  const ref = doc(db, "counters", counterId)

  try {
    await updateDoc(ref, { updatedAt: serverTimestamp() })
  } catch {
    await ensureCounter(counterId)
  }
}
