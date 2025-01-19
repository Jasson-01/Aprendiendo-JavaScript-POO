// Clase ABSTRACTA Maquina de Café
class MaquinaDeCafe{
    constructor(){
        if(new.target === MaquinaDeCafe){
            throw new Error()
        }
    }
}