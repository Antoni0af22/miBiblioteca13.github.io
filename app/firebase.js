import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc,} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  // ...
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
export const deleteLibro = (id) => deleteDoc(doc(db, "libros", id));

export const getLibro = (id) => getDoc(doc(db, "libros", id));

export const updateLibro = (id, newFields) =>
  updateDoc(doc(db, "libros", id), newFields);

export const getLibros = () => getDocs(collection(db, "libros"));