import { db } from "./firebase_config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const btnDashboard = document.getElementById("btnDashboard");
const tablaUsuarios = document.querySelector("#tablaUsuarios tbody");

btnDashboard.addEventListener("click", async () => {
  tablaUsuarios.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    tablaUsuarios.innerHTML += `
      <tr>
        <td>${data.correo}</td>
        <td>${data.puntaje}</td>
      </tr>`;
  });
});
