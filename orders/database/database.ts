import mongoose, { Connection } from "mongoose";

let writeDB: Connection | null = null;
let readDB: Connection | null = null;

/**
 * Connect to the write database
 */
export const connectWriteDB = async () => {
	if (writeDB) return writeDB; // Reuse existing connection
	try {
		writeDB = await mongoose.createConnection("mongodb://localhost:27017/writeDB", {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			autoCreate: true,
		});
		console.log("Connected to Write DB");
		return writeDB;
	} catch (err) {
		console.error("Error connecting to Write DB:", err);
		throw err;
	}
};

/**
 * Connect to the read database
 */
export const connectReadDB = async () => {
	if (readDB) return readDB; // Reuse existing connection
	try {
		mongoose.connect("mongodb://localhost:27017/readDB", {});
	} catch (err) {
		console.error("Error connecting to Read DB:", err);
		throw err;
	}
};
