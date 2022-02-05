function remove(e) {
    var total = document.querySelector("#total-connection");
    var numRequest = document.querySelector("#num-request");
    e.parentNode.remove();
    if(e.id=="accept"){
        total.innerHTML=(parseInt(total.innerHTML)) +1;
    }
    numRequest.innerHTML=(parseInt(numRequest.innerHTML)) -1;
}
function editProfile() {
    var nombre = prompt("Ingrese nombre:");
    var name = document.querySelector("#name");
    name.innerHTML = "<h1>"+nombre+"</h1>";
}