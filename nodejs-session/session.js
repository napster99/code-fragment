/**
 *
 * @desc session 模块简易实现
 *
 */

var start = function(req, res) {

  var conn = { req : req, res :res};

  var cookies = {};

  var cookie = conn.req.headers.cookie;

  if( typeof cookie !== 'undefined' ) {
    cookie.split(';').forEach(function(cookie) {
      var parts = cookie.split('=');
      cookies[ parts[0].trim() ] = (parts[1] || '').trim();
    })
  }else{
    cookies.SESSID = 0;    
  }

  var SESSID = cookies.SESSID;

  if( typeof sessions[SESSID] !== 'undefined' ) {
    session = sessions[SESSID];
    if(session.expires < Date()) {
      delete sessions[SESSID];
      return newSession(conn.res);
    }else{
      var dt = new Date();
      dt.setMinutes(dt.getMinutes() + 30);

      session.expires = dt;
      return sessions[SESSID];
    }
  } else {
    return newSession(conn.res);
  }

};

// 新建Session
function newSession(res) {

  var chars = '0123456789ABCDEFGFIJKLMNOPQRSTUVWXZabcdefgfijklmnopqrstuvwxz';
  var SESSID = '';

  for(var i=0; i<40; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    SESSID += chars.substring(rnum, rnum + 1);
  }

  if( typeof sessions[SESSID] !== 'undefined' ) {
    return newSession(res);
  }

  var dt = new Date();
  dt.setMinutes(dt.getMinutes() + 30);

  var session = {
    SESSID : SESSID,
    expires : dt
  }

  sessions[SESSID] = session;

  res.setHeader('Set-Cookie' , 'SESSID=' + SESSID);

  return session;

}

function cleanSessions() {
  for (sess in sessions) {
    if(sess.expires < Date()) {
      delete sessions[sess.SESSID];
    }
  }
}


exports.start = start;