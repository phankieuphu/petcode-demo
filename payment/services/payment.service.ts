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
		getAllPayments: {
			async handler(): Promise<string> {
				return "All payments method response";
			},
		},
	},
};

export default PaymentService;
