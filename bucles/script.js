function impares(){
    for (let i = 1; i <= 20; i++) {
        if(i%2 != 0)
            console.log(i);
    }
}
function mult3() {
    for (let i = 100; i >= 0; i--) {
        if(i%3 == 0)
            console.log(i);
    }
}
function secuencia() {
    for (let i = 8; i >= -7; i-=3) {
        console.log(i/2);
        
    }
}
function sigma() {
    var sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum +=i;
        
    }
    console.log(sum);
}
function factorial() {
    var product = 1;
    for (let i = 1; i <= 12; i++) {
        product*=i;
        
    }
    console.log(product);
}