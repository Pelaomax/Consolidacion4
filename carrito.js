// Constructor para crear un producto con nombre y precio
function producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

// Constructor para crear un carrito que contiene productos
function carrito(producto = []){
    this.producto = producto; // Inicializa el carrito con un arreglo de productos

    // Método para agregar productos al carrito
    this.agregarProductos = function(producto){
        this.producto.push(producto); // Añade un producto al arreglo de productos del carrito
    }

    // Método para calcular el total de la compra
    this.totalCompra = function(){
        let total = 'Total de la compra: \n'; // Texto inicial para el total
        let valorTotal = 0; // Variable para almacenar el valor total de la compra
        this.producto.forEach(function(producto){
            valorTotal += producto.precio; // Suma el precio de cada producto al valor total
        })
        alert(`${total} $${valorTotal}`); // Muestra el total de la compra en un alert
        this.finalizarCompra(); // Llama al método para finalizar la compra
    }

    // Método para mostrar los detalles de los productos en el carrito
    this.detallesCarrito = function(){
        detalles = 'Detalles de la compra: \n'; // Texto inicial para los detalles
        this.producto.forEach(function(producto, index){
            detalles += (`${index + 1}. ${producto.nombre} $${producto.precio} \n`); // Agrega cada producto y su precio a los detalles
        })
        alert(detalles); // Muestra los detalles del carrito en un alert
    }

    // Método para finalizar la compra
    this.finalizarCompra = function(){
        alert('Compra finalizada'); // Muestra un mensaje de finalización de compra
    }
}

// Creación de varios productos utilizando el constructor Producto
let producto1 = new producto("proteina papi micky", 35000);
let producto2 = new producto("proteina joaco", 50000);
let producto3 = new producto("proteina wako", 54000);
let producto4 = new producto("proteina cuadrado big", 90000);
let producto5 = new producto("proteina campeon", 150000);

// Creación de un carrito utilizando el constructor Carrito
let micarrito = new carrito();

// Función para iniciar el proceso de compra
function inicioCompra(carrito){
    let continuar = true; // Variable para controlar si se continúa o no añadiendo productos

    // Arreglo que contiene todos los productos disponibles
    const productos = [producto1, producto2, producto3, producto4, producto5];

    // Bucle para permitir al usuario añadir productos al carrito hasta que decida no continuar
    while(continuar){
        // Prompt para que el usuario seleccione un producto
        seleccion = prompt(`Que desea añadir al carrito: \n 1. ${producto1.nombre} - ${producto1.precio} \n 2. ${producto2.nombre} - ${producto2.precio} \n 3. ${producto3.nombre} - ${producto3.precio} \n 4. ${producto4.nombre}  - ${producto4.precio} \n 5. ${producto5.nombre} - ${producto5.precio}`)

        // Validación para asegurarse de que la selección sea válida
        while(isNaN(seleccion) || seleccion == 0 || seleccion >= 6 || seleccion == null){
            seleccion = prompt(`Por favor escoja una opción valida: \n 1. ${producto1.nombre} - ${producto1.precio} \n 2. ${producto2.nombre} - ${producto2.precio} \n 3. ${producto3.nombre} - ${producto3.precio} \n 4. ${producto4.nombre} - ${producto4.precio} \n 5. ${producto5.nombre} - ${producto5.precio}`)
        }

        // Agrega el producto seleccionado al carrito
        micarrito.agregarProductos(productos[seleccion - 1]);

        // Muestra los detalles actuales del carrito
        micarrito.detallesCarrito();
        
        // Pregunta al usuario si desea añadir otro producto
        continuar = confirm('Desea añadir otro producto?')
    }

    // Una vez que el usuario decide no continuar, muestra el total de la compra
    micarrito.totalCompra();
}

// Inicia el proceso de compra llamando a la función inicioCompra
inicioCompra(micarrito);