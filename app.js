module.exports = function coinConvert(usDollars) {
    var arr = [];
    var peruvianSoles = 3.25;
    var mexicanPesos = 18;
    var chileanPesos = 660;
  
    // Añade el monto equivalente en soles
    arr.push(usDollars * peruvianSoles);
  
    // Añade el monto equivalente en pesos mexicanos
    arr.push(usDollars * mexicanPesos);
  
    // Añade el monto equivalente en pesos chilenos
    arr.push(usDollars * chileanPesos);
  
    return arr;
  };