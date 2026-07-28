const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const workspaceRoutes = require("./routes/workspace.routes");

dotenv.config();

connectDB();

const app = express();


const PORT = process.env.PORT || 1000;


app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Register routes
app.use('/api/workspaces', workspaceRoutes);

app.get('/', (req, res) => {
    res.send({ status: 'Backend is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});