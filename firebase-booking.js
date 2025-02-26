// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
   apiKey: "AIzaSyCgJmSaTJ34PY-vdS514CFPf6GDU5ME_sk",
   authDomain: "crawford-hall-booking-system.firebaseapp.com",
   projectId: "crawford-hall-booking-system",
   storageBucket: "crawford-hall-booking-system.appspot.com",
   messagingSenderId: "888422109107",
   appId: "1:888422109107:web:b9d62ba7501e6ef8fb45c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Wait for the page to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('bookingForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;

        try {
            await addDoc(collection(db, "bookings"), {
                name: name,
                email: email,
                date: date,
                time: time
            });
            alert("Booking Confirmed!");
        } catch (error) {
            console.error("Error booking: ", error);
            alert("Error booking. Please try again.");
        }
    });
});

