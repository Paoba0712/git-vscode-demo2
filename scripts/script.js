

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

    function imprSelec(resultado) {
        var ficha = document.getElementById(result);
        var ventimp = window.open('resultado', 'popimpr');
        ventimp.document.write( ficha.innerHTML );
        ventimp.document.close();
        ventimp.print( );
        ventimp.close();
      }

    function validarVacios(resultado,operacion) {
            if(!isNaN(resultado)) {
                imprimirMensaje(operacion,resultado);
            } else {
                document.getElementById('result').textContent = "Debe ingresar valores numericos";
            }
        }

     
     