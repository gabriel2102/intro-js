function siempreHambriento(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "comida"){
            console.log("delicioso");
            sum +=1;
        }
    }
    if(sum==0)
        console.log("Tengo hambre");
}
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }      
    }
    return filteredArr;
}  
function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var prom = sum/arr.length;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>prom){
            count+=1;
        }
        
    }
    return count;
}
function reverse(arr) {
    /*var aux = [];
    var j = 0;
    
    for (let i = arr.length-1; i > arr.length; i--) {
        aux[j] = arr[i];
        console.log(i);
        j++;
    }*/
    return arr.reverse();
}
function fibonacciArray(limite) {
    var fibArr = [0, 1];
    for (let i = 2; i < limite; i++) {
        if(i===2){
            fibArr[i] = fibArr[0]+fibArr[1];
        }else if (i > 2) {
            //console.log(fibArr[i-1]);
            fibArr[i]=(fibArr[i-2] + fibArr[i-1]);
        }
    }
    return fibArr;
}
