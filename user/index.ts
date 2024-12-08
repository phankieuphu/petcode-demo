import { ServiceBroker } from "moleculer";
import UserService from "./services/user.service";

const broker = new ServiceBroker({
	nodeID: "user-service-node",
	transporter: "NATS",
});

broker.createService(UserService);

broker.start().then(() => {
	console.log("User service is running");
});
