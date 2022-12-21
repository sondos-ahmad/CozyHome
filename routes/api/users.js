const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');


router.post('/', [

    check('name','Name is required').not().isEmpty(),
    check('email', 'enter valid email').isEmail(),
    check('passwod', 'enter password with 8 or more characters').isLength({min: 8})

],(req,res) => {
    
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({err: err.array()});
    }
    
    res.send('User route')});


module.exports = router;