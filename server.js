const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 7000;

// looking into express static and static files
// app.use("/photos",express.static("./public/photos"))
// app.use(express.static("./build"))


// look into univeral * for routing
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"))
// })

const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5719792',
    password: 'yJuaX1X2lG',
    database: 'sql5719792'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.use(express.static(path.join(__dirname, 'build')))

// My Endpoint to fetch all my products
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log('Server is listening on port 7000');
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


