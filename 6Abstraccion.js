// Clase ABSTRACTA Maquina de Café
class MaquinaDeCafe {
  constructor() {
    if (new.target === MaquinaDeCafe) {
      throw new Error(
        "No se puede instanciar la clase Máquina de café por que es Abstracta"
      );
    }
  }

  // Métodos abstractos
  seleccionarBebida() {
    throw new Error("Este método debe ser implementado");
  }

  prepararBebida() {
    console.log("Preparando el brebaje");
  }

  servirBebida() {
    console.log("Sirviendo el café en el vaso");
  }

  // Método público que va a definir el comportamiento y flujo general (abstracción).
  // Va a llamar a los otros tres metodos.
  hacerCafe() {
    this.seleccionarBebida();
    this.prepararBebida();
    this.servirBebida();
  }
}

class ExpressoMachine extends MaquinaDeCafe {
  seleccionarBebida() {
    console.log("Has seleccionado un expresso");
  }
}

class CappuccinoMachine extends MaquinaDeCafe {
  seleccionarBebida() {
    console.log("Has seleccionado un cappuccino");
  }

  prepararBebida() {
    console.log("Realizando espuma");
    super.prepararBebida();
  }
}

const expresso = new ExpressoMachine();
const cappuccino = new CappuccinoMachine();

expresso.hacerCafe();
console.log("....................");
cappuccino.hacerCafe();




/* ABSTRACCIÓN
- La persona que va a utilizar nuestro proyecto no tiene porque saber la complejidad del mismo, justamente esto va a ser la abstracción del mundo real abstraemos y toda la complejidad no se la damos al cliente el cliente lo único que tiene que hacer es solo ejecutarlo.

- No se puede hacer una instancia de la clase padre o una instancia(osea usar el "new") de la clase Abstracta.

- Vamos a tomar conceptos de la vida real y lo vamos a llevar justamente a un concepto algo abstracto.

- Una clase abstracta NO esta lista para instanciarla, sino que esta lista para que las clases hijas la hereden.
*/

/*
La abstracción es un concepto fundamental en programación que se refiere a la capacidad de ocultar detalles innecesarios y mostrar solo la información relevante a los usuarios o a otros componentes del sistema.

En JavaScript, la abstracción se logra mediante la creación de objetos y funciones que encapsulan la lógica y los datos de una aplicación, permitiendo que los usuarios interactúen con la aplicación de manera más sencilla y sin tener que preocuparse por los detalles internos.

Uso de clases: Las clases en JavaScript pueden ser utilizadas para encapsular datos y funciones que se relacionan con ellos, lo que permite que los usuarios interactúen con la aplicación de manera más sencilla.

La abstracción es un concepto importante en programación porque permite:

Reducir la complejidad: La abstracción reduce la complejidad de la aplicación al ocultar detalles innecesarios.
Mejorar la legibilidad: La abstracción mejora la legibilidad de la aplicación al mostrar solo la información relevante.
Facilitar la mantenibilidad: La abstracción facilita la mantenibilidad de la aplicación al permitir que los cambios se realicen en un solo lugar.
*/
