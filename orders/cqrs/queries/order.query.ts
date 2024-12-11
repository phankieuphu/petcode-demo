import { ServiceSchema, Context } from "moleculer";
import { IOrder, OrderModel } from "../../models/order.schema";
import mongoose from "mongoose";
import { connectReadDB } from "../../database/database";

interface IGetOrder {
	id: number;
}

const OrderQueryService: ServiceSchema = {
	name: "order-query",
	async started() {
		// Connect to MongoDB when the service starts
		await connectReadDB();
	},

	actions: {
		async get(ctx: Context<IGetOrder>) {
			const { id } = ctx.params;
			// implement query here
			return await OrderModel.find({});

			// return order;
		},
	},
};

export = OrderQueryService;
