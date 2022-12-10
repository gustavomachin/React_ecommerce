import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNCtAL-RJpgee22h980g86HJdeKk9V9_0",
  authDomain: "tiendareact-a0f83.firebaseapp.com",
  projectId: "tiendareact-a0f83",
  storageBucket: "tiendareact-a0f83.appspot.com",
  messagingSenderId: "981349794671",
  appId: "1:981349794671:web:b9f622f3e6523eb26d9e9a",
  measurementId: "G-2ZM9SS3E49",
};

const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const DB = getFirestore(app);

// Trae todos los documentos
export default async function getItems() {
  const colectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProductsRef);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

//Trae un documento por ID
export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);
  const docSnapshot = await getDoc(docRef);
  return {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };
}

//Trae todos los  documentos según categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");
  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );
  const documentSnapshot = await getDocs(queryCat);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

//Envia la orden a Firebase
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id;
}
