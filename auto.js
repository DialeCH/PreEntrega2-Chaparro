let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

class Billete {
  constructor(n, v, c) {
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
  }
}

let caja = [];


caja.push(new Billete("100", 100, 2));
caja.push(new Billete("50", 50, 2));
caja.push(new Billete("20", 20, 3));
caja.push(new Billete("10", 10, 4));
caja.push(new Billete("5", 5, 5));

let dinero = 0;
let div = 0;
let papeles = 0;

let entregado = [];

function entregarDinero() {
  let t = document.getElementById("dineroASacar");
  dinero = parseInt(t.value);
  for (let bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(bi.nombre, bi.valor, papeles));
      dinero -= bi.valor * papeles;
      bi.cantidad -= papeles;
    }
  }

  if (dinero > 0) {
    console.log("No hay plata bro, bienvenido a LATAM");
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        for (let i = 0; i < e.cantidad; i++) {
          console.log("Sacaste: " + e.nombre);
        }
      }
    }
  }
}
