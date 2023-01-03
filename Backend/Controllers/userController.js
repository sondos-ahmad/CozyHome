const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



//Generate Token
const generateToken = (id)  => {
return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: "1d"});
} ;


//Register User
const registerUser = asyncHandler(
    async (req,res) => {
       const{ name,email,password} = req.body

    // validation
    if(!name || !email|| !password){
        res.status(400);
        throw new Error("please fill in all required fields");
    }
    if(password.length < 6){
        res.status(400);
        throw new Error("password must be up to 6 characters");

    }
    //check if user email already exists

   const userExist= await User.findOne({email})

   if(userExist){
    res.status(400);
    throw new Error("Email has already been Registered");

   }


   //encrypt password before saving to DB
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password,salt);
   
    //create new user 
   const user = await User.create({
    name,
      email,
    password:hashedPassword,
   });

  //Generate a token
  const token = generateToken(user._id);

  // Send Http-Only cookie

  res.cookie("token",token,{
    path:"/",
    httpOnly:true,
    expires: new Date(Date.now()+1000*86400) , // 1 day
    sameSite:"none",//can have diffrent url it will work
    secure:true //https
  })

   if(user){
    const{_id, name, email,phone }=user;
    res.status(201).json({
        _id,
        name,
       email,
       phone,
       token
    } )
   
   }
   else{
    res.status(400)
    throw new Error("Invalid User Data");
}



    }
);

//Login User
const LoginUser = asyncHandler (
    async(req , res) =>{
        const {email,password} = req.body

        //validation request
        if(!email|| password){
            res.status(400)
          throw new Error("Please add email and password");
        }

        //Check if user exists
        const user = await User.findOne({email})
        if(!user){
            res.status(400)
          throw new Error("User Not Found Please sign Up");
        }

        //User Exist ,check password
        const passwordIsCorrect = await bcrypt.compare(password,user.password);

        if(user && passwordIsCorrect){
            const{_id, name, email,phone }=user;
            res.status(201).json({
                _id, name, email,phone
            });
        }else{
            res.status(400)
            throw new Error("Invalid Email Or Password");

        }


    }
);
const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({ message: "Successfully Logged Out" });
  });

  const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      const { _id, name, email, phone } = user;
      res.status(200).json({
        _id,
        name,
        email,
        phone,
        
      });
    } else {
      res.status(400);
      throw new Error("User Not Found");
    }
  });
  const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      const { name, email, phone} = user;
      user.email = email;
      user.name = req.body.name || name;
      user.phone = req.body.phone || phone;
   
     
  
      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
       
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  });
  
  const changePassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const { oldPassword, password } = req.body;
  
    if (!user) {
      res.status(400);
      throw new Error("User not found, please signup");
    }
    //Validate
    if (!oldPassword || !password) {
      res.status(400);
      throw new Error("Please add old and new password");
    }
  
    // check if old password matches password in DB
    const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);
  
    // Save new password
    if (user && passwordIsCorrect) {
      user.password = password;
      await user.save();
      res.status(200).send("Password change successful");
    } else {
      res.status(400);
      throw new Error("Old password is incorrect");
    }
  });
 
module.exports ={
    registerUser,
    LoginUser,
    logout,
    getUser,
    updateUser,
    changePassword
}
