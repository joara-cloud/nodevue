const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();

// var pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   port: 3306,
//   password: 'whdkfk1!',
//   database: 'test_schema'
// })
var pool = mysql.createPool({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'bc7e03e97e8a9b',
  port: 3306,
  password: 'aef17477',
  database: 'heroku_5972366acc6e235'
})

router.post('/signup', function(req, res, next) {
  console.log('signup post 요청 실행됨');

  let user = { // 입력 받은 데이터를 user 객체에 저장
    userid: req.body.user.userid,
    name: req.body.user.name,
    password: req.body.user.password
  };
  console.log('user 객체 세팅완료');

  pool.getConnection(function(err, conn) {
    if(err) {
      console.log('연결객체 내부에서 오류 : ' + err.stack);
      return;
    }else {
      console.log('연결객체 연결 성공!');
      
      const exec = conn.query("select userid from users where userid = '" + user.userid + "'", function(err, row) {
        if(err) {
          console.log('쿼리문 실행중 오류! : '+err);
          return;
        }else {
          if(row.length > 0) { // DB에 동일한 아이디를 가진 데이터가 있다면 에러 메시지를 제공합니다.
            res.json({
              success: false,
              msg: '이미 사용중인 아이디 입니다.'
            });
          }else { // DB에 동일한 아이디를 가진 데이터가 없다면 user를 DB에 넣고

            // const salt = bcrypt.genSaltSync();
            // const encryptedPassword = bcrypt.hashSync(user.password, salt); // user 데이터를 DB에 넣을 때, bcrypt라는 패키지를 사용하여 비밀번호를 암호화합니다. (bcrypt 모듈 설치하고 import해아함!)

            bcrypt.genSalt(saltRounds, function(err, salt) {
              bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                // Store hash in your password DB.
                user.password = hash;
              });
            });


            let intoExec = conn.query('INSERT INTO users set ?', user, function(err, row) {
              if(err) {
                console.log('insert 실행 중 오류 : ' + err);
              }

              console.log(intoExec.sql);

            });
            
            res.json({
              success: true,
              msg: '회원가입이 완료되었습니다.'
            });
          }
        }
      });
    }
  });
});

router.post('/login', function(req, res, err) {
  console.log('/login 으로 요청들어옴');

  
  let user = {
    userid: req.body.user.id,
    password: req.body.user.password
  }
  console.log('user 정보 : ' + user);

  pool.getConnection(function(err, conn) {
    if(err) {
      console.log('getconnection 실행 중 오류 ' + err);
      return;
    }

    let exec = conn.query('select userid, password from users where userid="' + user.userid + '"', function(err, row) {
      if(err) {
        console.log('로그인 중 query문에서 에러 : '+err);
        console.log(exec.sql);
        return;
      }

      if(row.length > 0) { // 일치하는 아이디가 있는 경우
        console.log('일치하는 아이디가 있는 경우');
        bcrypt.compare(user.password, row[0].password, function(err, result) {
          console.log('err : ' + err);
          console.log('result : ' + result);
          console.log(user.password);
          console.log(row[0].password);
        });

        let bool = bcrypt.compareSync(user.password, row[0].password);
        console.log(bool);

      } else { // 일치하는 아이디가 없는 경우
        console.log('일치하는 아이디가 없는 경우');
        res.json({
          success: false,
          msg: '아이디나 비밀번호를 다시 확인해주세요.'
        });
      }
      
    });
  });


  // router.post('/login', function (req, res) {
  //   connection.query('SELECT userid, password FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
  //     if (err) {
  //       res.json({ // 매칭되는 아이디 없을 경우
  //         success: false,
  //         message: 'Login failed please check your id or password!'
  //       })
  //     }
  //     if (row[0] !== undefined && row[0].userid === user.userid) {
  //       bcrypt.compare(user.password, row[0].password, function (err, res2) {
  //         if (res2) {
  //           res.json({ // 로그인 성공 
  //             success: true,
  //             message: 'Login successful!'
  //           })
  //         }
  //         else {
  //           res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            
  //              success: false,
  //              message: 'Login failed please check your id or password!'
  //           })
  //         }
  //       })
  //     }
  //   })
  // });


})

router.post('/users', function(req, res, err) {
  console.log('user로 요청들어옴');
  if(err) {
    console.log(err);
    return;
  }

  res.status(200).send('success');
});

module.exports = router;