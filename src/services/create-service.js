import { db } from "./firebase";
import { collection, addDoc , getDocs, doc } from "firebase/firestore";

export async function newService({ name, time, modality, price }) {
    try {
      const serviceRef = collection(db, 'services');
  
      // Define los datos del servicio
      const serviceData = {
        name: name,
        time: time,
        price: price,
        modality: modality,
      };
  
      // Guarda los datos en la colección de servicios
      //await setDoc(serviceRef, serviceData);
      const newService = await addDoc(serviceRef, serviceData);
  
      console.log('Servicio guardado con éxito en Firebase.', newService.id);
    } catch (error) {
      console.error('Error al guardar el servicio:', error);
    }
}

export async function getServicesData() {
  try {
    const servicesRef = collection(db, 'services');
    const querySnapshot = await getDocs(servicesRef);

    const services = [];
    querySnapshot.forEach((doc) => {
      services.push({
        id: doc.id,
        name: doc.data().name,
        modality: doc.data().modality,
        price: doc.data().price,
        time: doc.data().time
      });
    });

    return services;
  } catch (error) {
    console.error('Error al obtener los datos de servicios:', error);
    return [];
  }
}




