require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel'); // Assuming you have an OrdersModel defined
const JWT_SECRET = process.env.JWT_SECRET || 'abc123';



const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL ;
 


// User model (add at the top if not already present)
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.models.User || mongoose.model('User', userSchema);


// Middleware
app.use(cors({
  origin: ["http://localhost:3000"], // Adjust this to your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

//auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};

// Use it in protected routes
app.get('/protected-route', authMiddleware, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});


app.use(bodyParser.json());
app.use(express.json());


//get all holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

//get all positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

//*
//newOrder
app.post("/newOrder", async (req, res) => {
  console.log(req.body);
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();
    res.send("Order received successfully");
});

// Signup route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({ 
      success: false,
      message: "All fields are required" 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address"
    });
  }

  // Password validation
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters long"
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        success: false,
        message: "Email already registered" 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ 
      name, 
      email, 
      password: hashedPassword 
    });
    
    await user.save();
    
    res.status(201).json({ 
      success: true,
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ 
      success: false,
      message: "Server error during signup" 
    });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Successful login
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      success: false,
      message: "Server error during login"
    });
  }
});

// Check user authentication (optional - for protected routes)
app.get('/check-auth', async (req, res) => {
  // This would typically check for a token or session
  // For now, returning a simple response
  res.json({
    authenticated: false,
    message: "Authentication check endpoint"
  });
});

// Get user profile (protected route example)
app.get('/profile/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    
    res.json({
      success: true,
      user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// Connect to MongoDB and start the server
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


