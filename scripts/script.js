

function toggleBloque() {

    var demo= document.getElementById("operacionesContenedor");
    
    if (demo.style.display === "none") {
        demo.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar operaciones";
    
    }else {
        demo.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar operaciones";
      }
    
    }
    

    function sumar() {
        var resultado = parseInt(document.getElementById("myNumber1").value)+ parseInt(document.getElementById("myNumber2").value);
    }