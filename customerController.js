'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',//127.0.0.1
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'asiakas'
});

module.exports = {
    haeTyypit: function (req, res) {
        connection.query('SELECT Avain, Lyhenne, Selite FROM Asiakastyyppi', function (error, results, fields) {
                console.log("Data = " + JSON.stringify(results));
                res.json(results);
        });
    },
    

    haeAsiakkaat: function (req, res) {
        var nimi = req.query.nimi;
        var osoite = req.query.osoite;
        var tyyppi = req.query.avain;
        console.log(req.query.osoite)
        console.log("nimi: " + nimi);
        console.log("osoite: " + osoite);
        console.log("tyyppi: " + tyyppi);

        var sql = "SELECT * FROM ASIAKAS WHERE 1=1";
        if(req.query.hasOwnProperty('nimi') != false){
            sql = sql + " AND nimi like '" + nimi + "%'";
          }
          if(req.query.hasOwnProperty('osoite') != false){
            sql = sql + " AND osoite like '" + osoite + "%'";
          }
          if(req.query.hasOwnProperty('asty') != false){
            sql = sql + " AND asty_avain like '" + asty + "%'";
          }
        connection.query(sql, function (error, results, fields) {
                console.log("Data = " + JSON.stringify(results));
                res.json(results);
        });
    }
};