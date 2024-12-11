import { Context, ServiceSchema } from "moleculer";
import { Order } from "../../interface/order.interface";
import { OrderModel } from "../../models/order.schema";
import mongoose, { mongo } from "mongoose";
import { connectReadDB, connectWriteDB } from "../../database/database";

const OrderCommandService: ServiceSchema = {
	name: "order-command",
	async started() {
		// Connect to MongoDB when the service starts
		// await connectWriteDB();
		await mongoose.connect("mongodb://localhost:27017/writeDB", {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
		});
		// this.OrderModel = OrderModel(writeDB)
	},
	actions: {
		async create(ctx: Context<Order>) {
			const { name, amount } = ctx.params;
			this.logger.info("Create order command");
			try {
				const order = new OrderModel({
					name: "order",
					amount: amount,
					password: "test",
					email: "test@test.com",
				});
				console.log("Save");

				await order.save();
				console.log("Save success");

				console.log("Emit event");
				ctx.emit("order-entity", { order: order });
				return { order: order };
			} catch (err) {
				this.logger.error("Error creating order:", err);
				throw err;
			}
		},
	},
};

export default OrderCommandService;
