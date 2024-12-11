import mongoose, { Schema, Document } from "mongoose";

// Define the Order interface extending Mongoose's Document
export interface IOrder extends Document {
	name: string;
	email: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
}

// Create the schema for the Order entity
const OrderSchema: Schema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true, // Automatically manages `createdAt` and `updatedAt`
	},
);

// Export the model
export const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);
