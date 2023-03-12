const express =require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {json} = require("express");
const {connection} = require('./sql-connector');

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/sign-in.html")
});


app.post("/api/v1/register", (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    connection.connect;
    connection.query(`INSERT INTO usertable (username, email, password) VALUES ('${userName}', '${userEmail}', '${userPassword}');`, (err, rows, fields) => {
          if (err) throw err
        
          console.log('successfully row inserted');
        //   console.log(fields);
        //   console.log('successfully added to table');
        })
    connection.end();

    res.sendFile(__dirname + "/public/sign-in.html")

});

app.listen(port);