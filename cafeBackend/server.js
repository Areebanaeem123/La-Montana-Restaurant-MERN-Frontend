const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const orderRoutes = require('./routes/orderRotues')
const menuRoutes = require('./routes/menuRoutes')
const adminRoutes = require('./routes/adminRoutes')
const staffRoutes = require('./routes/staffRoutes')
const reservationRoutes = require('./routes/reservationRoutes')
const inventoryRoutes = require('./routes/inventoryRoutes')
const specialDishRoutes = require('./routes/specialDishRoutes')
const tableRoutes = require('./routes/tableRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

// Initialize environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(cors({
    origin: "http://localhost:3000", //Front-end Origin
    credentials: true, // Allow credentials to be sent
}));
app.use(express.json());


// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/staff', staffRoutes)
app.use('/api/reservation',reservationRoutes)
app.use('/api/inventory',inventoryRoutes)
app.use('/api/special-dish',specialDishRoutes)
app.use('/api/table',tableRoutes)
app.use('/api/payment',paymentRoutes)

// app.use('/api/staff', require('./routes/staff'));
// app.use('/api/menu', require('./routes/menu'));
// Add routes for 'admin' and 'menu' as well

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
