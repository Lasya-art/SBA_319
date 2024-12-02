require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const alienRouter = require('./routes/aliens')
const app = express();
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect("mongodb+srv://lasyagwd:eNXHEiiEDHW1X8MN@cluster0.nsek3.mongodb.net/")
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));
// Routes
app.use('/aliens', alienRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
