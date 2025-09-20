const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors'); 
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/dbConnect');
const bookingRoutes = require('./routes/bookingRoute');
const showRoutes = require('./routes/showRoute');
const authRoutes = require('./routes/authRoute');

connectDB();

// ✅ Fix CORS
const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
// Middleware
app.use(express.json());


// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api", showRoutes);
app.use("/api/auth", authRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

