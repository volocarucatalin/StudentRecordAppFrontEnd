const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/student-response'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/student-response/index.html'));
});
app.listen(process.env.PORT || 8080);


const connection = mysql.createConnection({
  host: 'eu-cdbr-west-02.cleardb.net',
  user: 'ba55352dbf204e',
  password: '65807a03',
  database: 'heroku_fcb65ea2291422a'
})
