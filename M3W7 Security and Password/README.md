# W03D04 - Security & Real World HTTP Servers

### To Do

- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST

### Hashing

- one way process (cannot be undone)
- Plaintext password => hashing algo => '21jgh31kjh231kh23kjhkaza'
- use a special funciton to take the str and compare it to the normal password

### Encrypting

- Two way process
- set a cookie => Encrypt it => 'jhg32kjh12gkg2kjh1' => broswer
- 'jhg32kjh12gkg2kjh1' => decrypt => {userId: 'abc'} => routes can do something with it

req.cookies.user_id => req.session.user_id
req.cookies.userId => req.session.userId
req.cookies.userID => req.session.userID

res.cookie('userId', 'abc') => req.session.user_id = 'abc'
res.clearCookie('user_id') => req.session = null;

http
https
