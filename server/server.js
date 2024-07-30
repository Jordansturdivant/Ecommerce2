//imports and setup
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;


const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5721523',
    password: 'QImYfiAGmF',
    database: 'sql5721523'
});
  

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.use(express.static(path.join(__dirname, 'build'))) //serves static files from build directory

//route testing to ensure my server was running
app.get('/', (req,res) => {
    console.log('Yo');
    return res.json('yoo');
    
})

// My Endpoint to fetch all my products
app.get('/shop', (req, res) => {
    console.log('inside product server')
    const sql = 'SELECT * FROM Products';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
        console.log('ye');
        console.log(results);
    });
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});



