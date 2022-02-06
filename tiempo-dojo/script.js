function alerta() {
    alert("Loading weather report...");
}
function accept() {
    var element = document.querySelector("#footer");
    element.remove();
}
function fac(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
function caf(temp) {
    return Math.round(9 / 5 * temp + 32);
}
function calcular(e) {
    
    for(var i=1; i<9; i++) {
        var temps = document.querySelector("#temp" + i);
        var aux = parseInt(temps.innerText);
        if(e.value == "°C") {
            temps.innerText = fac(aux);
        } else {
            temps.innerText = caf(aux);
        }
    }
    
    
}
