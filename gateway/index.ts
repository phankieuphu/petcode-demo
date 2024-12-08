import { ServiceBroker } from "moleculer";
import GatewayService from "./services/gateway.service";

const broker = new ServiceBroker({
	nodeID: "gateway-node",
	transporter: "NATS",
});

broker.createService(GatewayService);

broker.start().then(() => {
	console.log("Gateway is running at http://localhost:3000");
});
