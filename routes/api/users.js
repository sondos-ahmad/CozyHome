const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt  = require ('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const config = require('config');
const User = require('../../models/User');


// register users

router.post('/', [

    check('name','Name is required').not().isEmpty(),
    check('email', 'enter valid email').isEmail(),
    check('password', 'enter password with 8 or more characters').isLength({min: 8})

], async (req,res) => {
    
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({err: err.array()});
    }

    const {name,email,password} = req.body;

    try{
        let user = await User.findOne({email});

        if (user){
           return res.status(400).json({errors: [{msg:'User exists'}]});
        }
        
        // making object
        user = new User({
            name,
            email,
            password
        });

        // bcrypt the password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();

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