const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoute = require("./routes/user");
const dateRoute = require("./routes/date");
const orderRoute = require("./routes/order");

// Settings
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Parsing JSON requests

// Routes
app.use("/api/users", userRoute);
app.use("/api/dates", dateRoute);
app.use("/api/orders", orderRoute);

// Initial route
app.get("/", (req, res) => {
    res.send("Welcome to my API. Please refer to /api/users, /api/dates, and /api/orders for available endpoints.");
});

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if unable to connect to the database
});

// Starting the server
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/`);
});
