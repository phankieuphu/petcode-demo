import { ServiceSchema } from "moleculer";
import DbMixin from "../mixins/db.mixin";
const OrderService: ServiceSchema = {
	name: "order",
	// mixins: [DbMixin("orders")],
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
