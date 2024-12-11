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
            this.updateOrderTable();
            document.getElementById("home-screen").style.display = "none";
            document.getElementById("orders-screen").style.display = "block";
        }
    },

    // Actualiza la tabla con las órdenes actuales
    updateOrderTable: function () {
        const tableBody = document.getElementById("orders-table");
        tableBody.innerHTML = ""; // Limpia las filas existentes
        this.orders.forEach(order => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.detail}</td>
                <td>${order.date}</td>
            `;
            tableBody.appendChild(row);
        });
    },

    // Muestra la siguiente orden o finaliza cuando no hay más órdenes
    nextOrder: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.orders.length) {
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
