const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
})

module.exports = {connection};
// connection.connect()

// connection.query('SELECT customerName from customers', (err, rows, fields) => {
//   if (err) throw err

// //   console.log(rows);
// //   console.log(fields);
//   console.log('The solution is: ', rows[0].customerName)
// })

// connection.end()


