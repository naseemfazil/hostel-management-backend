const express = require('express');
const app = new express();
const cors = require('cors');
const PORT = 3000;
const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// const dbUrl = "mongodb+srv://jojopaydbadmin:jojojojo@jojopaycluster.ecc2zb8.mongodb.net/jojopays";
const dbUrl = "mongodb://localhost:27017/hostel";
// Hostal-managment localhost:27017 [direct]
// const cluster = require('cluster');
// const logRequestResponse = require('./middlewares/logger');
// const verifyToken = require('./middlewares/tokenMiddleware');


// app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());


// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});


// app.use(verifyToken);
// app.use(logRequestResponse);

// API Routes


// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, succ) => {
//     if (err) {
//         console.log("Db not connected");
//         console.log(err);
//     } else {
//         console.log("MongoDB Atlas connected");
//     }
// });

async function connectDB() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

connectDB();


