
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  where 
} from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBvHgIFGeu5Puc_TpWFsYV94ZDu5bTPwjA",
  authDomain: "mitienda-b221b.firebaseapp.com",
  projectId: "mitienda-b221b",
  storageBucket: "mitienda-b221b.firebasestorage.app",
  messagingSenderId: "247002944224",
  appId: "1:247002944224:web:6d9c40b4439f229850b685"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const getProducts = async (categoriaId = null) => {
  try {
    let q = collection(db, "productos");
    if (categoriaId) {
      q = query(q, where("categoria", "==", parseInt(categoriaId)));
    }

    const querySnapshot = await getDocs(q);
    const productosList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return productosList;
  } catch (error) {
    console.error("Error obteniendo los productos:", error);
    return [];
  }
};


const uploadProducts = async (productos) => {
  try {
    const productsCollection = collection(db, "productos");
    for (const producto of productos) {
      await addDoc(productsCollection, producto);
    }
    console.log("Productos subidos correctamente");
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
};


const createOrder = async (orderData) => {
  try {
    const orderCollection = collection(db, "orders");
    const docRef = await addDoc(orderCollection, orderData);
    console.log("Orden creada con ID:", docRef.id);
    return docRef.id; 
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error; 
  }
};


export { 
  db, 
  getProducts, 
  uploadProducts,
  createOrder 
};
