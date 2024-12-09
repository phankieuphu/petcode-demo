import { ServiceSchema } from "moleculer";

const ProductService: ServiceSchema = {
	name: "product",
	settings: {
		port: 3004,
		ip: "0.0.0.0",
	},
	actions: {
		reserve(ctx) {
			const { orderID, items } = ctx.params;
			this.logger.info("Reserving inventory for order:", orderID);
			return { orderID, status: "Reserved", items };
		},
		release(ctx) {
			const { orderID, items } = ctx.params;
			this.logger.info("Releasing inventory for order:", orderID);
			return { orderID, status: "Released", items };
		},
	},
};

export default ProductService;
