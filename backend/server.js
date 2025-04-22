const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter'); 

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // for JSON payload
app.use(express.urlencoded({ extended: true })); // for form-data (x-www-form-urlencoded)


app.use('/api/users', userRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
