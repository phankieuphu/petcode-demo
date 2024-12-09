import { Context, ServiceSchema } from "moleculer";

interface Payment {
	id: number;
	name: string;
}

const PaymentService: ServiceSchema = {
	name: "payment",
	settings: {
		port: 3002,
		ip: "0.0.0.0",
	},
	actions: {
		process(ctx) {
			const { orderId, amount } = ctx.params;
			this.logger.info("Processing payment for order:", orderId);
			return { orderId, status: "Paid", amount };
		},
		refund(ctx) {
			const { orderId } = ctx.params;
			this.logger.info("Refunding payment for order:", orderId);
			return { orderId, status: " refunded" };
		},
	},
};

export default PaymentService;
