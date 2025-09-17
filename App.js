const express = require('express');
const path = require('path');
const app = express();
//const cors = require('cors'); 
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/dbConnect');
const bookingRoutes = require('./routes/bookingRoutes');

connectDB();
// Middleware
app.use(express.json());
//app.use(cors());

// Routes
app.use("/api/bookings", bookingRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

