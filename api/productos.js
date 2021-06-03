class Productos {
    constructor() {
        this.productos = []
        // incializar variables
    }
    guardar({title, price, thumbnail}) {
        this.productos.push({title, price, thumbnail,  id: this.generateID()})
    };

    listar() {
        return this.productos
    }
    
    generateID(){
        return this.productos.length + 1
    }
}

// exporto una instancia de la clase
module.exports = new Productos();