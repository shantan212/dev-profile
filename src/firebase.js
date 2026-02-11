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
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
  const appId = import.meta.env.VITE_FIREBASE_APP_ID

  if (!apiKey || !authDomain || !projectId || !appId) {
    throw new Error(
      "Missing Firebase config. Set VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_APP_ID."
    )
  }

  return {
    apiKey,
    authDomain,
    projectId,
    appId,
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
