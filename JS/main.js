/*Ingreso de un valor producto, saco el interes por cantidad de cuotas elegidas.
En este caso solo se utiliza prompt, la idea es que se tome el valor de la pagina.*/


/*let totalaPagar = prompt("Ingrese el total del producto");
const cuotas = prompt("Ingrese cantidad de cuotas");
let cuotasP = 0;

//Funcion
function calcular(totalApagar, cuotas) {
  if (totalApagar > 0) {
  
    switch (cuotas) {
      case '3':
        console.log("3 cuotas");
        alert("En 3 cuotas, tienes un 2% de interes");
        cuotasP = (totalApagar / cuotas) * 1.2;
        total = cuotasP *3
        break;
      case '6':
        console.log(" 6cuotas");
        alert("En 6 cuotas, tienes un 3% de interes");
        cuotasP = (totalApagar / cuotas) * 1.3;
        total = cuotasP *6
        break;

      case '12':
        console.log("En 12 cuootas, tienes un 4% de interes");
        cuotasP = (totalApagar / cuotas) * 1.4;
        total = cuotasP *12
        break;

      default:
        alert("No tiene interes");
    }

  }
  else {
    alert("Ingrese un monto mayor a 0")
  }
  // console.log("\nEl total a pagar es de: " + totalApagar);
  alert("\nEl total a pagar es de: " + total);
  // console.log("\nEl total a pagar es de: " + cuotasP);
  alert("\nEl total a pagar de cada cuota es de: " + cuotasP);
}


calcular(totalaPagar, cuotas);*/

//Complementario 2
//Array guardamos productos que se venden, luego seleccionamos uno por Prompt y traemos su precio.

class Producto {
  constructor(nombre, precio, cantidad){
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.cantidad = cantidad;
  }
  
}
//Claro Array
var arrayProductos = [];
do{
  var comprobacion = prompt("ingrese el nombre del Producto o Cerrar, para terminar de agregar productos");
  if (comprobacion === "cerrar"|| comprobacion === "CERRAR" || comprobacion === "Cerrar"){
    break;
  }else{
    nombrePr = comprobacion;
    var precioPr = prompt("Ingrese el Precio del Producto");
    var cantidadPr = prompt ("Ingrese la cantidad de Producto Comprada");
    arrayProductos.push(new Producto(nombrePr,precioPr,cantidadPr));
  }
}

while(comprobacion != "cerrar"|| comprobacion != "CERRAR" || comprobacion != "Cerrar");

console.log(arrayProductos);