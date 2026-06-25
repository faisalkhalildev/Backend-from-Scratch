const bcrypt = require("bcrypt")
const users = [];

exports.register = async (req , res) => {
    const {username , email, password} = req.body;
    if(!username || !email || !password){
        return res
          .status(400)
          .send({isSucess : false , message:"All fields are required"});
    }
    try {
        const  foundUser = users.find((item) => 
            item.username === username && item.email === email
         );
         if(foundUser){
            return res
             .status(409)
             .send({isSucess: false , message:"username and email already exist"})
         }

         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(password, salt);
         console.log(hashPassword)

         const user = {username , email , password:hashPassword}
         users.push(user)

         res.send({isSucess: true , message: "User sucessfully Registered!"})
    } catch(error) {
        console.error("error")
    }
}

exports.getUsers = async (req, res) => {
    res.send({isSucess: true , data:users})
}