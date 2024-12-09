import { ServiceBroker } from "moleculer";
import SagaService from "./services/saga.service";

const broker = new ServiceBroker({
	nodeID: "saga-service",
	transporter: "NATS",
});

broker.createService(SagaService);

broker.start().then(() => {
	console.log("Saga service started successfully");
});
