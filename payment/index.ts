import { ServiceBroker } from "moleculer";
import PaymentService from "./services/payment.service";

const broker = new ServiceBroker({
	nodeID: "payment-node",
	transporter: "NATS",
});

broker.createService(PaymentService);

broker.start().then(() => {
	console.log("PaymentService started successfully");
});
