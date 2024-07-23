const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

// Enable CORS for all routes
// app.use(cors({
//   origin: 'http://localhost:3000', 
//   methods: ['GET', 'POST']
// }));


const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5721523',
    password: 'QImYfiAGmF',
    database: 'sql5721523'
});
    // host: 'sql5.freesqldatabase.com',
    // user: 'sql5721523',
    // password: 'yQImYfiAGmF',
    // database: 'sql5721523'


db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.use(express.static(path.join(__dirname, 'build')))

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

// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: 'sql5.freesqldatabase.com',
//     user: 'sql5719792',
//     password: 'yJuaX1X2lG',
//     database: 'sql5719792'

// })

// app.listen(7000, () => {
//     console.log('Server is listening on port 7000');
// });


