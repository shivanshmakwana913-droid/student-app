require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentDB";
mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Connection failed:", err));


// Define student schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, default: "MERN Stack" }
});

// Create model
const Student = mongoose.model("Student", studentSchema);



// Create new student
const newStudent = new Student({
  name: "Aman",
  age: 22,
  course: "Full Stack"
});

// Save to database


const students = [
  { name: "Riya", age: 20 },
  { name: "Karan", age: 25, course: "DevOps" },
  { name: "Neha", age: 19 },
  { name: "Lucky", age: 23, course: "Beauty Parlour" }
];

Student.insertMany(students)
  .then(() => {
    console.log("✅ Multiple students inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.log("❌ Error:", err));
