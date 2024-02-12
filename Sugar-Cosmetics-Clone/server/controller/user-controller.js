// user-Controller.js
const { userDetail } = require("../model/user-schema");
const bcrypt = require("bcrypt");

const useRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userDetail({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

const useLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userDetail.findOne({ email: email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return res.status(200).json({ data: user });
      } else {
        return res.status(401).json('Invalid login');
      }
    } else {
      return res.status(401).json('Invalid login');
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = { useRegister, useLogin };






// // user-Controller.js
// const { userDetail } = require("../model/user-schema");

// const useRegister = async (req, res) => {
//   try {
//     const user = req.body;
//     const newUser = new userDetail(user);
//     await newUser.save();

//     res.status(200).json({ message: user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const useLogin = async(req,res)=>{
//         try {
//                 const email = req.body.email
//                 const password = req.body.password

//                let user = await userDetail.findOne({email:email, password:password})
//                if(user){
//                 return res.status(200).json({data:user})
//                }
//                else{
//                 return res.status(401).json('Invalid login')
//                }
//         } catch (error) {
//                 res.status(500).json({ message: error.message });    
//         }
// }

// module.exports = { useRegister, useLogin };