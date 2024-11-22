let intervalo = []


function iniciar(){
    let segundos = parseInt(document.getElementById("tiempo").value, 10);
    if (isNaN(segundos) ||segundos <= 0) {
        return
    } 

    document.getElementById("segundos").innerHTML = segundos

    intervalo = setInterval(function() {
        let tiempoactual = parseInt (document.getElementById("segundos").innerHTML, 10)
        if(tiempoactual <= 1) {
            clearInterval(intervalo)
            document.getElementById("segundos").innerHTML = "00"
        } else {
            document.getElementById("segundos").innerHTML = tiempoactual - 1
        }
    }, 1000)
}


function detener() {
    clearInterval(intervalo)
    document.getElementById("segundos").innerHTML ="00"
}

document.getElementById("Empezar").addEventListener("click", iniciar)
document.getElementById("Cancelar").addEventListener("click", detener)