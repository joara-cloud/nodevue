const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'whdkfk1!',
  database: 'test_schema'
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

            const salt = bcrypt.genSaltSync();
            const encryptedPassword = bcrypt.hashSync(user.password, salt); // user 데이터를 DB에 넣을 때, bcrypt라는 패키지를 사용하여 비밀번호를 암호화합니다. (bcrypt 모듈 설치하고 import해아함!)

            user.password = encryptedPassword;

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


module.exports = router;