class Animal {
    constructor(nombre,sonido){
        this.nombre = nombre 
        this.sonido = sonido 
    }
    
    hacerSonido(){
        console.log(`${this.nombre} hace: ${this.sonido}`)
    }
}

class Perro extends Animal {
    constructor(nombre){
        // La palabra reservada "super" hacer referencia al llamado del constructor del Padre del que hereda
        super(nombre,"Guau")
    }

    moverCola(){
        console.log(`${this.nombre} está moviendo la cola felizmente`)
    }
}

class Gato extends Animal {
    constructor(nombre){
        super(nombre,"Miau")
    }

    ronronear(){
       console.log(`${this.nombre} está ronroneando contento`)

    }
}

const perrito = new Perro("Manchita")
const gatito = new Gato("Pelusa")

// Hacer sonido lo puedo usar en ambos ya que heredan de Animal
perrito.hacerSonido()
perrito.moverCola()

gatito.hacerSonido()
gatito.ronronear()


/*
NOTA:

-La palabra clave super se utiliza para llamar al constructor de la clase padre, para acceder a los métodos y propiedades de la clase padre, o para llamar a otros métodos del objeto padre.

*/