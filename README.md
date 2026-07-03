# 🎓 Student Database Seeder Utility

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-blue.svg)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-darkred.svg?logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight and efficient Node.js utility designed to quickly seed a MongoDB database with student records using the **Mongoose ODM**. It connects to a local MongoDB instance, validates data using a defined schema, and batch inserts records.

---

## 🚀 Features

* **Local MongoDB Integration:** Seamless connection to a local `mongodb://127.0.0.1:27017` instance.
* **Structured Mongoose Schema:** Enforces constraints on `name` (required), `age` (required), and `course` (defaults to "MERN Stack").
* **Batch Ingestion:** Utilizes `insertMany()` for high-performance concurrent database writes.
* **Auto-clean Terminal Execution:** Automatically terminates the database connection upon successful operation.

---

## 🛠️ Schema Definition

The student logs correspond to the following Mongoose schema model:

| Field | Type | Required | Default Value | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `String` | **Yes** | *None* | Full name of the student. |
| `age` | `Number` | **Yes** | *None* | Age of the student (used for analytics). |
| `course` | `String` | No | `"MERN Stack"` | Enrolled cohort or stream of study. |

---

## 📋 Prerequisites

Before running this utility, ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v14 or above)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community) (running locally on port `27017`)

---

## ⚙️ Installation & Usage

Follow these steps to run the seeder locally:

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd student-app
```

### 2. Install Dependencies
Install the required packages:
```bash
npm install
```

### 3. Configure Environment Variables
Configure your database URI using `.env` file. You can duplicate the provided template:
```bash
copy .env.example .env
```
Inside `.env`, verify your connection details:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/studentDB
```

### 4. Start MongoDB Server
Ensure your local MongoDB instance is active. If running as a Windows service, it starts automatically. If not, start it manually:
```bash
mongod
```

### 5. Run the Script
Populate your database by running:
```bash
node app.js
```

Upon execution, you should see the following logs in your console:
```text
✅ MongoDB connected
✅ Multiple students inserted
```

---

## 📂 Project Structure

```text
student-app/
├── app.js                 # Entry point & DB operation logic
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Locked versions of dependencies
├── .env                   # Local environment variables (gitignored)
├── .env.example           # Shared environment variables template
├── .gitignore             # Git exclusion rules
└── README.md              # Project documentation (this file)
```

---

## 📝 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) (if present) or refer to the standard MIT template.
