import {onGetLibros, deleteLibros, getLibro, getLibros } from "./firebase.js";    

  const iibrossContainer = document.getElementById("libros-container");
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetLibross((querySnapshot) => {
        iibrossContainer.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
  
        iibrossContainer.innerHTML += `
        <div class="card card-body mt-2 border-primary">
        <h3 class="h5">${libro.titulo}</h3>
        <p>${libro,autor}</p>
        <p>${libro,editorial}</p>
        <p>${libro,isbn}</p>
        <p>${libro,fecha}</p>
        <div>
            <button class="btn btn-primary btn-delete" data-id="${doc.id}">
            🗑 Delete
            </button>
        </div>
        </div>`;
      });
  
      const btnsDelete = iibrossContainer.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteLibros(dataset.id);
          } catch (error) {
            console.log(error);
          }
        })
      );
  
      });
    });
  
  
  
