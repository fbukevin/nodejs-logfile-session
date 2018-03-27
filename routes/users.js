var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var session = req.session;
  
  if(typeof session != 'undefined' && session.username != '' && session.password != ''){
    res.render('already', { session_id: session.id, username: session.username });
  } else {
    res.render('login');
  }
});


router.post('/login', (req,res)=>{
  var username = req.body.username;
  var password = req.body.password;
  var session = req.session;
console.log(req.session)
  if(typeof session != 'undefined' && session.username == username && session.password == password){
    res.render('already', { session_id: session.id, username: username });
  } else {
    session.username = username;
    session.password = password;
    res.render('logined', { session_id: session.id, username: username });
  }
});


router.get('/logout', (req, res)=>{
  var session = req.session;  
  var username = session.username;
  session.username = '';
  session.password = '';
  res.render('logout', { session_id: session.id, username: username })
});

module.exports = router;
