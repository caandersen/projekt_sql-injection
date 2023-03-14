//node Desktop\projekt_sqlinjection\index.js
//127.0.0.1

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const express = require('express');
var expr = express();
const path = require('path');

var http = require('http');


const db = new sqlite3.Database('./data.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Verbindung zur SQLite-Datenbank wurde hergestellt.');
});



exports.data_lookup = function(i1, i2) {
    const question = db.prepare('SELECT * FROM master_data WHERE Username = ? AND Password = ?');
    var val1;
    console.log("Abfrage Datenbank")

    question.all([i1, i2], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }

        rows.forEach(row => {
            val1 = val1 + 1
        });

    });

    question.finalize();

    console.log(val1);
    return val1;
    //document.getElementById("output").innerHTML = output_text;
};

expr.use(express.static(__dirname + '/js'));

expr.get('/', (req, res) =>{

    expr.use((req, res) => {
        res.set('X-Content-Type-Options', 'sniff');
    });

    fs.readFile('./index.html', "utf-8", (err, html) => {
        if (err) {
            res.status(500).send('sorry, out of order')
        }
        res.send(html);
    })

});


//document.getElementById("submit").addEventListener("click",data_lookup(document.getElementById("username").value),document.getElementById("password".value) )


expr.listen(process.env.Port || 3000, () => console.log(('App verfügbar auf http://localhost:3000')))




