import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";

export async function deleteServiceByID(id) {
  try {
    const serviceRef = doc(db, 'services', id);
    await deleteDoc(serviceRef);
    console.log('Servicio eliminado con éxito.');
    return true; // Puedes devolver un valor para indicar que se eliminó con éxito
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    return false; // Puedes devolver un valor para indicar que hubo un error
  }
}