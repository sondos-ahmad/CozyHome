const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt  = require ('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const config = require('config');


router.get('/', auth, async (req,res)=> {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    }catch(err){
        console.error(err.massage);
        res.status(500).send('server error');
    }
});


router.post('/', [

    check('email', 'enter valid email').isEmail(),
    check('password', 'password required').exists()

], async (req,res) => {
    
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({err: err.array()});
    }

    const {email,password} = req.body;

    try{
        let user = await User.findOne({email});

        if (!user){
           return res.status(400).json({errors: [{msg:'invalid'}]});
        }
        
       const isMatch = await bcrypt.compare(password, user.password);

       if (!isMatch){
        return res.status(400).json({errors: [{msg:'invalid'}]});
       }

        

        const payload = {
            user: {
                id : user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),
        {expiresIn: 360000},
        (err, token) =>{
            if(err) throw err;
            res.json({token});
        }
        );

       

    }catch(err){
        console.error(err.massage);
        res.status(500).send('server error');
    }
    
    
    });

module.exports = router;