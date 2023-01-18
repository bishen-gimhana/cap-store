const User= require('../models/user.model');
const bcrypt = require('bcrypt');


   
async function insert(user){
    user.hashedPassword = bcrypt.hashSync(user.password,10);
    delete user.password;

    console.log(`saving user to db `, user);
    return await new User(user).save();    
}



async function getUserByEmailIdAndPassword(email,password){
    let user = await User.findOne({ email});
    
    if(isUserValid(user, password,user.hashPassword)){
  user = user.toObject();
  delete user.hashedPassword;
  return user;
  }else{
   return null;   
      
  
   }
  }
  function isUserValid(user, password,hashedPassword){
   return user && bcrypt.compareSunc(password,hashedPassword);
  }




module.exports={
    insert ,
    getUserByEmailIdAndPassword
};
