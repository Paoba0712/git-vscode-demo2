

function toggleBloque() {

    var demo= document.getElementById("operacionesContenedor");
    
    if (demo.style.display === "none") {
        demo.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar texto";
    
    }else {
        demo.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar texto";
      }
    
    }
    