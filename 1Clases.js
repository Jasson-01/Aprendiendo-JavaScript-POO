// clase : es una plantilla
class Persona {

    // Constructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(nombre, edad, profesion){
        // Propiedades o características
        // this hace referencia a la PERSONA que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

}

// De esta forma estamos instanciando un objeto basado en la clase (plantilla)
const carolina = new Persona("Carolina", 35, "Astronauta")
const ricardo = new Persona("Ricardo", 18, "Estudiante de Programación")

// GET: obtención de datos
console.log(carolina.edad)
console.log(ricardo.profesion)

// SET: cambiar de información
carolina.edad = 45 
ricardo.profesion = "Estudiante de Artes"

console.log(carolina.edad)
console.log(ricardo.profesion)


//------------------------------ FORMA Intuitiva

/*
// clase : es una plantilla
class Persona {

    // Constructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(arg1,arg2){
        // Propiedades o características
        // this hace referencia a la PERSONA que estamos instanciando
        this.caracteristica1 = arg1
        this.caracteristica2 = arg2
    }

}

// De esta forma estamos instanciando un objeto basado en la clase (plantilla)
const persona = new Persona("alto","ingeniero")

console.log(persona)
console.log(persona.caracteristica1)
console.log(persona.caracteristica2)
*/
