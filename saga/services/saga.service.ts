import { ServiceSchema } from "moleculer";

const SagaService: ServiceSchema = {
	name: "saga",
	settings: {
		port: 3003,
		ip: "0.0.0.0",
	},
	actions: {
		async createOrder(ctx) {
			const { orderId, customerId, items, amount } = ctx.params;
			try {
				const order = await ctx.call("order.create", { orderId, customerId, items });
				this.logger.info("Order created:", order);

				// Step 2: Process payment
				const payment = await ctx.call("payment.process", { orderId, amount });
				this.logger.info("Payment processed:", payment);

				// Step 3: Reserve inventory
				const inventory = await ctx.call("product.reserve", { orderId, items });
				this.logger.info("Product reserved:", inventory);

				// If everything is successful
				return { order, payment, inventory };
			} catch (err) {
				await ctx.call("product.release", { orderId });
				await ctx.call("payment.refund", { orderId });
				await ctx.call("order.cancel", { orderId });
			}
		},
	},
};

export default SagaService;
