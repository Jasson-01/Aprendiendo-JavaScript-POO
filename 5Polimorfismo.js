class Instrumento {
  constructor(nombre) {
    //Propiedad o caracteristica
    this.nombre = nombre;
  }

  //Método
  tocar() {
    console.log(`${this.nombre} está producinedo un sonido`);
  }
}

class Guitarra extends Instrumento {
  constructor() {
    super("Guitarra");
  }

  //POLIMORFISMO: Es la capacidad de múltiples clases a responder distinto a ina misma función o método.

  // Sobreescribir o pisar [OVERRIDE] el método heredado

  tocar() {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `!La ${this.nombre} está haciendo un solo, Impresionante!`
    ); // Color rojo
  }
}

class Bateria extends Instrumento {
  constructor() {
    super("Bateria");
  }

  tocar() {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `!La ${this.nombre} está tocando los tambores a un gran ritmo!`
    ); // Color verde
  }
}

class Piano extends Instrumento {
  constructor() {
    super("Piano");
  }

  tocar() {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `!La ${this.nombre} está haciendo unas hermosas notas pentatónicas de blues!`
    ); // azul
  }
}

function showBanda(Instrumento) {
  Instrumento.tocar();
}

const guitarra = new Guitarra();
const bateria = new Bateria();
const piano = new Piano();

showBanda(guitarra);
showBanda(bateria);
showBanda(piano);

// POLIMORFISMO
// Utilizar el mismo metodo en distintas clases hijas que tienen distinto comportamiento.
