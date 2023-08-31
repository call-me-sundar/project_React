// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12643599',
  database: 'sql12643599',
  password: '1UnX8VGBli'
});

pool.getConnection()
.then(()=>{
    console.log('db connection successful');
}).catch(err =>{
    console.log('db =>>>>>>>>>>>>>>>>>>>>>>>>>'+'connection error');
    console.log(err);
})

module.exports = pool;