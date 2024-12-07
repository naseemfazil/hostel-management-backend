const express = require('express');
const app = new express();
const cors = require('cors');
const PORT = 3001;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// mongoose.set('strictQuery', false);
// const dbUrl = "mongodb+srv://jojopaydbadmin:jojojojo@jojopaycluster.ecc2zb8.mongodb.net/jojopays";
const dbUrl = "mongodb://localhost:27017/hostel";
// Hostal-managment localhost:27017 [direct]
// const cluster = require('cluster');
// const logRequestResponse = require('./middlewares/logger');
// const verifyToken = require('./middlewares/tokenMiddleware');
const User = require('./src/models/mUser');

// app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());




app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});


// app.use(verifyToken);
// app.use(logRequestResponse);

// API Routes


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

// Testing Api
// const studentSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     course: { type: String, required: true },
// });

// const Student = mongoose.model('Student', studentSchema);

// app.post('/add-student', async (req, res) => {
//     console.log("req", req.body);

//     const { name, age, course } = req.body;

//     const newStudent = new Student({
//         name,
//         age,
//         course
//     });

//     try {
//         const savedStudent = await newStudent.save();
//         res.status(200).json(savedStudent);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// Save users
app.post('/register', async (req, res) => {
    const { name, email, password, confirmPassword, gender } = req.body;
    console.log("req.body", req.body);

    // Validate if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            gender
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});



