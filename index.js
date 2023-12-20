const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv').config()
const userRoutes = require('./src/Route/router');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
