const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'cis2368identifier1.cposem4a2i5v.us-east-2.rds.amazonaws.com',
  user: 'admin',         // your MySQL username
  password: 'cis2024jim', // your MySQL password
  database: 'cis2368db'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example: Run a simple query
connection.query('SELECT * FROM menu', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log(results);
});

// Close the connection
connection.end();





