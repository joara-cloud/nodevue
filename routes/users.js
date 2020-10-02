const express = require('express');
const router = express.Router();
const app = express();

// 다음은 백엔드의 routes/users.js에 넣어줄 부분입니다.
// 입력 받은 데이터를 user 객체에 저장한 뒤, DB에 동일한 아이디를 가진 데이터가 없다면 user를 DB에 넣고 그렇지 않다면 에러 메시지를 제공합니다.
// user 데이터를 DB에 넣을 때, bcrypt라는 패키지를 사용하여 비밀번호를 암호화합니다.

router.post('/signup', function(req, res, next) {

  const user = {
    userid: req.body.user.userid,
    name: req.body.user.name,
    password: req.body.user.password
  };

  pool.getConnection(function(err, conn) {
    if(err) {
      console.log(err.stack);
      return;
    }else {
      alert(conn);
    }
  })

  // connection.query('SELECT userid FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
  //   console.log(row[0]);
  //   if (row[0] == undefined){ //  동일한 아이디가 없을경우,
  //     const salt = bcrypt.genSaltSync();
  //     const encryptedPassword = bcrypt.hashSync(user.password, salt);
  //     connection.query('INSERT INTO users (userid,name,password) VALUES ("' + user.userid + '","' + user.name + '","' + encryptedPassword + '")', user, function (err, row2) {
  //       if (err) throw err;
  //     });
  //     res.json({
  //       success: true,
  //       msg: 'Sing Up Success!'
  //     })
  //   }
  //   else {
  //     res.json({
  //       success: false,
  //       msg: 'Sign Up Failed Please use anoter ID'
  //     })
  //   }
  // });
  
});


module.exports = router;




// router.post('/singup', function(req, res) {
//   const user = {
//     userid: req.body.user.userid,
//     name: req.body.user.name,
//     password: req.body.user.password
//   };

//   console.log(user);
// });

// router.post('/signUp', function (req, res) {
//   const user = {
//     'userid': req.body.user.userid,
//     'name': req.body.user.name,
//     'password': req.body.user.password
//   };
//   connection.query('SELECT userid FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
//     if (row[0] == undefined){ //  동일한 아이디가 없을경우,
//       const salt = bcrypt.genSaltSync();
//       const encryptedPassword = bcrypt.hashSync(user.password, salt);
//       connection.query('INSERT INTO users (userid,name,password) VALUES ("' + user.userid + '","' + user.name + '","' + encryptedPassword + '")', user, function (err, row2) {
//         if (err) throw err;
//       });
//       res.json({
//         success: true,
//         message: 'Sing Up Success!'
//       })
//     }
//     else {
//       res.json({
//         success: false,
//         message: 'Sign Up Failed Please use anoter ID'
//       })
//     }
//   });
  
// });