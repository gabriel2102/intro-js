function contador(e) {
    var num = e.innerText.slice(0,3);
    alert("Ninja was liked");
    e.innerText = (parseInt(num)+1) + " likes";
}
function addButton(e) {
    e.remove();
}
function login(e) {
    e.innerText="logout";
}