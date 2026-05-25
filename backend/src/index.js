const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products.routes");
const { connectDB, getDB, closeDB } = require('./config/db');
const { errorHandler } = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Health Check
app.get("/api/health", (_req, res) =>{
    res.json({status: "ok"});
})

// Error Handling
app.use(errorHandler);

async function start() {
    await connectDB();
    console.log("Connected to MongoDB");

    const db = getDB();
    app.locals.db = db;

    const server = app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));

    process.on('SIGINT', async () => {
        await closeDB();
        server.close(() => process.exit(0));
    });
}

start().catch((err) => {
    console.error("Startup failed:", err.message);
    process.exit(1);
});
