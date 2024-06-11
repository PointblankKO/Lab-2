This project is a simple web application that manages employees, projects, and project assignments. It consists of a backend server built with Express.js and MongoDB, and a frontend client built with React.js

Getting Started

To get started with this project, follow the instructions below.
Before running the project, make sure you have the following installed
Node.js
MongoDB
cd your-project
Install the dependencies for both the frontend and backend:
npm install

Configuration

Before running the server, make sure to configure the MongoDB connection string in the config/db.js file.
javascript
module.exports = {
  // MongoDB connection string
  mongoURI: 'your-mongodb-connection-string'
}; or .env file

for .env create .env file with the variable: URI = "add your URI here"

Running the Application

Start the backend server:

npm run server
Start the frontend development server:

npm start

to build for deployment:

npm run build

Access the application in your web browser:
Frontend: http://localhost:8080
Backend API: http://localhost:3000/api

Usage:

View the latest project assignments on the homepage.

If you do changes in the database it will refreash after 1  min to show them,
or you can manually trigger that by clicking refresh on your browser