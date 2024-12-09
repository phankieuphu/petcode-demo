import { ServiceBroker } from "moleculer";
import ProductService from "./services/product.service";

const broker = new ServiceBroker({
	nodeID: "product-service-node",
	transporter: "NATS",
});

broker.createService(ProductService);

broker.start().then(() => {
	console.log("Product service started successfully");
});
