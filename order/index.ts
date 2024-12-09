import { ServiceBroker } from "moleculer";
import OrderService from "./services/order.service";

const broker = new ServiceBroker({
	nodeID: "order-node",
	transporter: "NATS",
});

broker.createService(OrderService);

broker.start().then(() => {
	console.log("Order services started");
});
