const User=require("../model/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.Signup = async (req, res) => {

    try {
        const { firstName, lastName, email, password } = req.body;


        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ error: "email id is alredy exist" })
        }
        const hashpassword = await bcrypt.hash(password, 10)
       
        const data = new User({ firstName, lastName, email, password: hashpassword });
        await data.save();
        res.status(200).json({ message: "registerd successfully", data })
        // res.send({
        //     statusCode:200,
        //     message:"registerd successfully",
        //     data
        // })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ message: "data not found" })
        }
        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            return res.status(401).json({ message: "password invalid" })
        }


        const token=jwt.sign(
            {userid:userData._id,email:userData.email},
            "QADSFGHBJNKM",
            {expiresIn:'24h'}
        );
        
        res.status(200).json({message:"Login success",token})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getuserList=async(req,res)=>{
    try{
        const userData=await User.find({});
        if (!userData) {
            return res.status(400).json({ message: "data not found" });
        }
        res.status(200).json({message:"data fetch successfully",userData});
    } catch (error) {
      res.status(500).json({error:error.message});
    }
};