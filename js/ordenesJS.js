function procesarPedido() {
    fetch("http://localhost:8080/api/orders/poll", {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Pedido procesado:', data);
            mostrarDetallesPedido(data);
        })
        .catch(error => {
            console.error('Error al procesar el pedido:', error);
        });
}

function consultarPedido() {
    fetch("http://localhost:8080/api/orders/peek", {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Pedido consultado:', data);
            mostrarDetallesPedido(data);
        })
        .catch(error => {
            console.error('Error al consultar el pedido:', error);
        });
}

function mostrarDetallesPedido(pedido) {
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = `
                <h2>Orden Numero: ${pedido.id}</h2>
                <p>Cliente: ${pedido.cliente}</p>
                <h3>Comidas:</h3>
                <ul>
                    ${pedido.comidas.map(comida => `<li>${comida}</li>`).join('')}
                </ul>
                <p>Total: ${pedido.total}</p>
            `;
}