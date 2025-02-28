/**
 * JWT: secure your api
 * 
 * -------------------------------------
 *              CREATE TOKEN
 * -------------------------------------
 * 
 * 1. Client: after user login send user basic info to create token
 * 2. in the server side: install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expiresIn})
 * 5. return token to the client side
 * 
 * 6. after receiving the token store it either http only cookies or localstorage(second option)
 * 
 * 7. use a general space : OnAuthStateChange > AuthProvider
 * -------------------------------------
 *          SEND TOKEN TO SERVER
 * -------------------------------------
 * 1. for sensitive api call( ) send authorization headers {authorization: 'Bearer token'}
 * 2. 
 * -------------------------------------
 *              VERIFY TOKEN
 * -------------------------------------
 * 1. Create a function called verifyJWT (middleware)
 * 2. this function will hae three params: req, res, next
 * 3. First check whether the authorization headers
 * 4. if not send 401
 * 5. get he token out of the authorization header
 * 6. call jwt.verify(token, secret, (err, decode){})
 * 7. if err => send 401
 * 8.set decode to the req objects so that we can retrieve it later
 * 9. call the next() to go to the next function
 * -------------------------------------------
 * 1. check wether token has the email that matches with the request email
 * 
 * ***/