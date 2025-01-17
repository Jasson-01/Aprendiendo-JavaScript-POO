# Aprendiendo-JavaScript-POO

## Paradigma de programación

Es un **enfoque** o estilo que define cómo se **estructuran** y escriben los programas. Cada paradigma establece **reglas** sobre cómo los desarrolladores pueden crear, organizar y manipular el código para resolver problemas.

Algunos ejemplos incluyen la programación imperativa, orientada a objetos, funcional y logica, cada una con sus propias características y principios.

Comprender estos paradigmas es crucial para seleccionar el enfoque mas adecuado al resolver problemas y diseñar sistemas de sofware eficientes y mantenibles.

## Programación Orientada a Objetos (POO)

Es un paradigma de programación que organiza el código en **objetos**, cada uno con sus propios datos y comportamientos.

Se centra en conceptos como la abstracción, encapsulamiento, herencia y polimorfismo para facilitar el desarrollo de sofware modular, reutilizable y fácil de mantener.

En POO, **los objetos** interactúan entre sí mediante "mensajes", lo que permite una representación más cercana de los conceptos del mundo real y una mejor gestion de la complejidad en los programas.

## Bases de la POO

### Clases
Son la piedra angular de la POO actuando como **plantillas** para la creación de **objetos**. Definen las **propiedades**(atributos) y **comportamientos**(métodos) que caracterizan a los **objetos** de un tipo especifico. Al encapsular datos y funcionalidades relacionadas, permiten la reutilización del código, la organización modular y la abstracción.

### Atributos
Son las **características** o datos que describen el **estado** de un objeto en un contexto determinado. Estos pueden representar desde valores símples como números o cadenas de texto, hasta estructurar más complejas como objetos u otros tipos de datos. Los **atributos** definen las **propiedades** de un objeto con los cuales se gestiona el **estado** del mismo.

### Métodos
Son bloques de código que encapsulan una serie de acciones o **comportamientos** específicos asociados a un **objeto**. Estos permiten realizar operaciones sobre los datos de un **objeto**, modificar su **estado** interno y responder a eventos dentro de un programa. Los **métodos** pueden acceder a los **atributos** de un **objeto**.

### Objetos
Los **objetos** son **instancias** específicas de una **clase** que encapsulan **datos** y **comportamientos** relacionados. Los **objetos** permiten modelar entidades del mundo real de manera modular y reutilizable, facilitando la organización y el diseño de sistemas de sofware eficientes y mantenibles.

## Características de la POO 

### Abstracción
Permite representar entidades del mundo real como **objetos** con **características** y **comportamientos** relevantes para el problema que se está resolviendo. Esto simplifica la complejidad del sistema al enfocarse en aspectos esenciales y proporcionar una forma de modelar conceptos del mundo real en el código.

### Encapsulamiento
Los detalles internos de un **objeto** deben estar ocultos fuera de su definición y solo deben ser acccesibles a tráves de una interfaz claramente definida. Esto promueve la seguridad y la integridad de los datos al prevenir accesos no autorizados y facilita el mantenimiento del código.

### Herencia
Permite que una **clase**(subclase) herede **atributos** y **métodos** de otra **clase**(superclase), lo que promueve la reutilización del código y la organización jerárquica de las clases. Esto facilita la creación de nuevas clases que **extienden** el comportamiento de clases existentes, permitiendo una mayor flexibilidad y modularidad en el diseño del sistema.

### Polimorfismo
Se refiere a la capacidad de **objetos** de diferentes clases de responder al mismo mensaje de manera diferente. En otras palabras, un mismo **método** o mesaje puede producir diferentes resultados según el tipo de objeto que lo reciba. Esto permite escribir código más genérico y reutilizable.

## Versiones y detras de escena
Antes de ES6, no tenía clases formales. Se usaban funciones constructoras y prototipos para simular la POO. Con ES6 se introdujo la sintaxis class, aunque internamente sigue usando prototipos. 