import { errorHandler } from '../../utils/error.js';
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
    console.log(req.body)
    const { userName, userEmail, userPassword, userFirstName } = req.body;

    if (!userName || !userEmail || !userPassword || !userFirstName) {
        next(errorHandler(400, 'All fields are required'))
    }

    const hashedPassword = bcryptjs.hashSync(userPassword, 10)

    const newUser = new User({
        username: userName,
        email: userEmail,
        password: hashedPassword,
        first_name: userFirstName
    });

    try {
        await newUser.save();
        res.status(201).json("Signup successful!")
    } catch (error) {
        next(error)
    }

}