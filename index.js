// Simple JavaScript Project Setup
console.log('Data Structures Project Initialized!\n');

import express from 'express';
import apiRoutes from './src/infrastructure/routes/api.js';

import { stackHandler } from './src/application/basic/stackHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
