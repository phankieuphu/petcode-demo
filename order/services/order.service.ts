import { ServiceSchema } from "moleculer";

const OrderService: ServiceSchema = {
	name: "order",
	actions: {
		createOrder: {
			async handler(): Promise<string> {
				return "Init order success";
			},
		},
	},
};

export default OrderService;
