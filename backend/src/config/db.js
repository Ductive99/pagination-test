const { MongoClient } = require("mongodb")

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

let db = null;
let client = null;

/**
 * Connects to MongoDB
 * Called once at startup, the same connection is reused for the lifetime of the process
 */
async function connectDB() {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME || "shop");

    const products = db.collection("products");
    await Promise.all([
        products.createIndex({ category: 1, price: 1}),
        products.createIndex({ category: 1, createdAt: -1}),
        products.createIndex({ price: 1}),
        products.createIndex({ name: 1}),
    ]);

    return db;
}

/**
 * Returns the db instance
 * Throws an error if called before connectDB()
 */
function getDB() {
    if (!db) throw new Error("Database not initialized. Call connectDB() first.");
    return db;
}

async function closeDB() {
    if (client) {
        await client.close();
        client = null;
        db = null;
    }
}

module.exports = { connectDB, getDB, closeDB };