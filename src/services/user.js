import { doc, getDoc, getDocs, serverTimestamp, setDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {string} id 
 * @returns {Promise<{id: string, email: string, rol: string}>}
 */
export async function getUserProfileById(id) {
  const refUser = doc(db, `users/${id}`);
  const docSnapshot = await getDoc(refUser);

  if (docSnapshot.exists()) {
    console.log("Document data:", docSnapshot.data());
     return {
      id: docSnapshot.id,
      email: docSnapshot.data().email,
      rol: docSnapshot.data().rol,
    }
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }


}


export async function getUsers() {
  const usersRef = collection(db, 'users');

  try {
    const querySnapshot = await getDocs(usersRef);
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data()
      });
    });

    console.log('Estos son los usuarios:', users);
    return users;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    return [];
  }
}

/**
 * 
 * @param {string} id 
 * @param {{email: string, rol: string}} data 
 * @returns {Promise}
 */
export async function createUserProfile(id, data) {
  const refUser = doc(db, `users/${id}`);
  return setDoc(refUser, { ...data, created_at: serverTimestamp() });
}