import { Context, ServiceSchema } from "moleculer";

interface Payment {
	id: number;
	name: string;
}

const PaymentService: ServiceSchema = {
	name: "payment",
	actions: {
		getAllPayments: {
			async handler(): Promise<string> {
				return "All payments method response";
			},
		},
	},
};

export default PaymentService;
