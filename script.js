function conversaoRealDolar () {
    let real = document.querySelector(".br").value; 
    let result = real / 5.14;
    document.querySelector(".eua").value = result.toFixed(2);
    let dolar = document.querySelector(".eua").value;
}