import { Service, ServiceBroker } from "moleculer";
import OrderService from "./services/order.service";
import OrderCommandService from "./cqrs/commands/order.command";
import OrderQueryService from "./cqrs/queries/order.query";
import DbService from "moleculer-db";
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
import { OrderModel } from "./models/order.schema";
import { createConnection, Model } from "mongoose";
import OrderProjectionService from "./cqrs/projection/order.projection";
const broker = new ServiceBroker({
	nodeID: "order-service-node",
	transporter: "NATS",
});

createConnection("mongodb://localhost:27017/petcode", {});

broker.createService(OrderCommandService);
// broker.createService(OrderQueryService);
broker.createService(OrderService);

const queryBroker = new ServiceBroker({
	nodeID: "query-service-node",
	transporter: "NATS",
});
queryBroker.createService(OrderQueryService);

const projectionBroker = new ServiceBroker({
	nodeID: "projection-service-node",
	transporter: "NATS",
});
projectionBroker.createService(OrderProjectionService);

queryBroker.start().then(() => {
	console.log("Query service is running");
});

projectionBroker.start().then(() => {
	console.log("Projection service is running");
});
broker.start().then(() => {
	console.log("Order service is running");
});
