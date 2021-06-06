
function toggleBloque() {

var boton = document.getElementById("operacionesContenedor");

if (boton.style.display === "none"){
    boton.style.display = "block";
    document.getElementById("operacionesContenedor").textContent = "Ocultar texto";

}else {
    boton.style.display = "none";
    document.getElementById("operacionesContenedor").textContent = "Mostrar texto";
  }

}
