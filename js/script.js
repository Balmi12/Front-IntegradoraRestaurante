const orderManager = {
    orders: [],
    currentIndex: 0,

    // Registra una nueva orden
    registerOrder: function () {
        const newOrder = {
            id: this.orders.length + 1,
            detail: `Orden ${this.orders.length + 1}`,
            date: new Date().toLocaleString(),
        };
        this.orders.push(newOrder);
        alert("Orden registrada: " + newOrder.detail);
    },

    // Muestra la pantalla de órdenes o mensaje si no hay órdenes
    processOrders: function () {
        if (this.orders.length === 0) {
            document.getElementById("home-screen").style.display = "none";
            document.getElementById("no-orders-screen").style.display = "block";
        } else {
            this.currentIndex = 0;
            this.showOrderDetails();
            document.getElementById("home-screen").style.display = "none";
            document.getElementById("orders-screen").style.display = "block";
        }
    },

    // Muestra los detalles de la orden actual
    showOrderDetails: function () {
        const orderDetailsContainer = document.getElementById("order-details-container");
        orderDetailsContainer.innerHTML = ""; // Limpia el contenido anterior

        if (this.currentIndex < this.orders.length) {
            const currentOrder = this.orders[this.currentIndex];
            const orderDetails = document.createElement("div");
            orderDetails.className = "order-details";
            orderDetails.innerHTML = `
                <p><strong>ID:</strong> ${currentOrder.id}</p>
                <p><strong>Detalle:</strong> ${currentOrder.detail}</p>
                <p><strong>Fecha:</strong> ${currentOrder.date}</p>
            `;
            orderDetailsContainer.appendChild(orderDetails);
        } else {
            document.getElementById("no-orders-btn").style.display = "block";
            document.querySelector(".next-order").style.display = "none";
        }
    },

    // Muestra la siguiente orden o finaliza cuando no hay más órdenes
    nextOrder: function () {
        this.currentIndex++;
        if (this.currentIndex < this.orders.length) {
            this.showOrderDetails();
        } else {
            document.getElementById("no-orders-btn").style.display = "block";
            document.querySelector(".next-order").style.display = "none";
        }
    },

    // Muestra mensaje cuando ya no hay órdenes
    noMoreOrders: function () {
        alert("No hay más órdenes disponibles.");
        this.returnHome();
    },

    // Regresa a la pantalla principal
    returnHome: function () {
        document.getElementById("home-screen").style.display = "block";
        document.getElementById("orders-screen").style.display = "none";
        document.getElementById("no-orders-screen").style.display = "none";
        document.getElementById("no-orders-btn").style.display = "none";
        document.querySelector(".next-order").style.display = "block";
    },
};
