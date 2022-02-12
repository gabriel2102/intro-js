function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    
    return pizza;
}
var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p4 = pizzaOven("estilo New York", "tradicional", ["azul, ranco"], ["cebolla", "carne"]);
var p5 = pizzaOven("veneciana", "marinara", ["gauda"], ["pepperoni", "aceitunas"]);