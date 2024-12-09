"use strict";
exports.__esModule = true;
var moleculer_1 = require("moleculer");
var order_service_1 = require("./services/order.service");
var broker = new moleculer_1.ServiceBroker({
    nodeID: "order-node",
    transporter: "NATS"
});
broker.createService(order_service_1["default"]);
broker.start().then(function () {
    console.log("Order services started");
});
