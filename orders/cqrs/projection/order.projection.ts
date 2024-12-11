import { ServiceSchema } from "moleculer";
import { Order } from "../../interface/order.interface";
import mongoose from "mongoose";
import { connectReadDB } from "../../database/database";
import { OrderModel } from "../../models/order.schema";

const OrderProjectionService: ServiceSchema = {
	name: "order-projection",
	async started() {
		// Connect to MongoDB when the service starts
		await connectReadDB();
	},
	events: {
		async "order-entity"(payload: any) {
			console.log("Projection", payload);

			const orderRead = new OrderModel(payload.order);
			orderRead.save();
			this.logger.info("Projection: entity created", payload);
			return;
		},
	},
};

export = OrderProjectionService;
