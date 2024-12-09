import { ServiceSchema } from "moleculer";

const OrderService: ServiceSchema = {
	name: "order",
	actions: {
		create: {
			async handler(): Promise<string> {
				return "Init order success";
			},
		},
		cancel: {
			async handler(): Promise<string> {
				this.logger.info("Order canceled");
				return "Order canceled";
			},
		},
	},
};

export default OrderService;
