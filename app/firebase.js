import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc,} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAungT1_1YwJaX5Gt8X8Sm7BOqCftrlrHw",
  authDomain: "mibiblioteca13-82b4a.firebaseapp.com",
  projectId: "mibiblioteca13-82b4a",
  storageBucket: "mibiblioteca13-82b4a.appspot.com",
  messagingSenderId: "741150657084",
  appId: "1:741150657084:web:5315954404df2e82f61139"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

//guardar libro
export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });

//lista libros
export const onGetLibros = (callback) => 
    onSnapshot(collection(db,'libros'),callback);

//borrar
/**
 *
 * @param {string} id Task ID
 */
export const deleteLibro = (id) => deleteDoc(doc(db, "libros", id));

export const getLibro = (id) => getDoc(doc(db, "libros", id));

export const updateLibro = (id, newFields) =>
  updateDoc(doc(db, "libros", id), newFields);

export const getLibros = () => getDocs(collection(db, "libros"));
