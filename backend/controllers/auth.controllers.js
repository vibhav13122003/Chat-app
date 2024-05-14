import User from "../models/user.model.js";
import generateTokenandSetCookie from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const correctPassowrd = await bcrypt.compare(password, user?.password || "");
        if (!correctPassowrd || !user) {
            return res.status(401).json({ message: "Invalid username or password" });

        }
        generateTokenandSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            profilePic: user.profilePic,
            userName: user.userName
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

export const signup = async (req, res) => {
    try {
        const { fullName, password, email, confirmpassword, gender, userName } = req.body

        const user = await User.findOne({ userName })
        if (user) {
            return res.status(400).json({ error: "user already exists" })
        }
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            password: hashedpassword,
            email,
            gender,
            userName,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            generateTokenandSetCookie(newUser._id, res)
            await newUser.save()

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(400).json({ error: "invalid data" })
        }

    }
    catch (err) {
        res.status(400).json({ error: err.message })

    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(200).json({ message: 'logout' });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}