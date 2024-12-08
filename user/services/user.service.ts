import { Context, ServiceSchema } from "moleculer";

interface User {
	id: number;
	name: string;
}

const UserService: ServiceSchema = {
	name: "user",

	actions: {
		getAllUsers: {
			async handler(): Promise<User[]> {
				return [
					{ id: 1, name: "John Doe" },
					{ id: 2, name: "Jane Smith" },
				];
			},
		},
		createUser: {
			async handler(ctx: Context<User>): Promise<{ message: string; user: User }> {
				const user = ctx.params;
				return { message: "User created successfully", user };
			},
		},
	},
};

export default UserService;
