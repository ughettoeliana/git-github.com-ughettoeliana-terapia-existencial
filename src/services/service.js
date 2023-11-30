import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export async function newService({ name, time, modality, price }) {
  try {
    const serviceRef = collection(db, "services");

    // Define los datos del servicio
    const serviceData = {
      name: name,
      time: time,
      price: price,
      modality: modality,
    };

    // Guarda los datos en la colección de servicios
    const newService = await addDoc(serviceRef, serviceData);
  } catch (error) {
    console.error("Error al guardar el servicio:", error);
  }
}

export async function getServicesData() {
  try {
    const servicesRef = collection(db, "services");
    const querySnapshot = await getDocs(servicesRef);

    const services = [];
    querySnapshot.forEach((doc) => {
      services.push({
        id: doc.id,
        name: doc.data().name,
        modality: doc.data().modality,
        price: doc.data().price,
        time: doc.data().time,
      });
    });

    return services;
  } catch (error) {
    console.error("Error al obtener los datos de servicios:", error);
    return [];
  }
}

export async function getServicesDataById(id) {
  try {
    const serviceRef = doc(db, "services", id);
    const serviceDoc = await getDoc(serviceRef);

    const service = {
      name: serviceRef.data().name,
    };

    console.log("service.name", service.name);
    //return true;
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    return false;
  }
}

export async function deleteServiceByID(id) {
  try {
    const serviceRef = doc(db, "services", id);
    await deleteDoc(serviceRef);
    return true;
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    return false;
  }
}

export async function hireService(
  serviceId,
  userId,
  appointmentDateAndHour = {}
) {
  console.log("serviceId", serviceId);
  console.log("userId", userId);
  try {
    const serviceRef = doc(db, "services", serviceId);
    const serviceDoc = await getDoc(serviceRef);

    if (serviceDoc.exists()) {
      const hiredService = collection(db, "hiredServices");
      const hiredServiceData = {
        userId: userId,
        serviceId: serviceId,
        name: serviceDoc.data().name,
        time: serviceDoc.data().time,
        price: serviceDoc.data().price,
        modality: serviceDoc.data().modality,
        appointment: {
          date: appointmentDateAndHour.date,
          hour: appointmentDateAndHour.hour,
        },
      };

      const newService = await addDoc(hiredService, hiredServiceData);
      console.log(
        "Servicio contratado con éxito y guardado en Firebase.",
        newService.id
      );
      return true;
    } else {
      console.error("El servicio no existe.");
      return false;
    }
  } catch (error) {
    console.error("Error al contratar el servicio:", error);
    return false;
  }
}

export async function getHiredServices(userId) {
  try {
    const hiredServicesRef = collection(db, "hiredServices");
    const querySnapshot = await getDocs(hiredServicesRef);

    const hiredServices = [];
    querySnapshot.forEach((doc) => {
      hiredServices.push({
        id: doc.id,
        userId: doc.data().userId,
        serviceId: doc.data().serviceId,
        name: doc.data().name,
        modality: doc.data().modality,
        price: doc.data().price,
        time: doc.data().time,
      });
    });

    return hiredServices;
  } catch (error) {
    console.error("Error al obtener los datos de servicios:", error);
    return [];
  }
}
