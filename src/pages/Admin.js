import React from "react";
import './css/pages.css'
import db from '../utils/firebase';
import { doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
// import { async } from "@firebase/util";


const Admin = async () => {

    // const prueba = async () => {
    //     const db = firebase.firestore();
    //     const docRef = doc(db, "orders", "CwvPBwHNZNz0j0QoRCjB");
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //       console.log("Document data:", docSnap.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    // }
    // prueba()

    // const getData = async () => {
    //     const cityRef = db.collection('orders').doc('CwvPBwHNZNz0j0QoRCjB');
    //     const doc = await cityRef.get();
    //     if (!doc.exists) {
    //         console.log('No such document!');
    //     } else {
    //         console.log('Document data:', doc.data());
    //     }
    // }
    // getData()

const gett = async () => {
    
const docRef = doc(db, "orders", "CwvPBwHNZNz0j0QoRCjB");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

gett()

    return (
        <div className="admin">
            <h1>bienvenidos</h1>
            <p>Texto de ejemplo</p>
        </div>
    )
}

export default Admin;