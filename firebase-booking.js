// Load Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
   const firebaseConfig = {
      apiKey: "AIzaSyCgJmSaTJ34PY-vdS514CFPf6GDU5ME_sk",
      authDomain: "crawford-hall-booking-system.firebaseapp.com",
      projectId: "crawford-hall-booking-system",
      storageBucket: "crawford-hall-booking-system.firebasestorage.app",
      messagingSenderId: "888422109107",
      appId: "1:888422109107:web:b9d62ba7501e6ef8fb45c6"
};


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Handle Booking Form
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;

        db.collection('bookings').add({
            name: name,
            email: email,
            date: date,
            time: time
        }).then(() => {
            alert("Booking Confirmed!");
        }).catch(error => {
            console.error("Error booking: ", error);
        });
    });
});
