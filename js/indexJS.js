function crearNuevoPedido() {
    fetch("http://localhost:8080/api/orders/new", {
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Nuevo pedido creado:', data);
            // Aquí puedes realizar acciones adicionales, como redirigir a otra página
        })
        .catch(error => {
            console.error('Error al crear el nuevo pedido:', error);
        });
}