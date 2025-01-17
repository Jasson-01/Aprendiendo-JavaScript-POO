// clase : es una plantilla
class Animal {
  // Constructor: es un método especial que permite instanciar objetos basándose en la clase
  constructor(nombre, edad, especie, sonido) {
    // Propiedades o características
    // this hace referencia a la PERSONA que estamos instanciando
    this.nombre = nombre;
    this.edad = edad;
    this.especie = especie;
    this.sonido = sonido;
  }

  // Método: Es una función que representa un comportamiento propio de esta clase
  hacerSonido() {
    console.log(this.sonido);
  }

  decirNombre() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

const manchita = new Animal("Machita", 1, "Perro", "guau");
const pelusa = new Animal("Pelusa", 2, "Gato", "miau");

manchita.decirNombre();
pelusa.decirNombre();

// METODOS
// Nos permiten darle comportamientos a una clase
