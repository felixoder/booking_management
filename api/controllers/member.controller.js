import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import Member from '../models/member.model.js';
import jwt from 'jsonwebtoken';

export const signMembers = async (req, res, next) => {
    const { u_name, u_email, member_code, u_pass } = req.body;

    // Check if all required fields are present
    if (!u_name || !u_email || !member_code || !u_pass || u_name === '' || u_email === '' || member_code === '' || u_pass === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        // Hash the password
        const hashedPassword = bcryptjs.hashSync(u_pass, 10);

        // Create a new Member instance with hashed password
        const newMember = new Member({
            u_name,
            u_email,
            member_code,
            u_pass:hashedPassword 
        });

        // Save the new member to the database
        await newMember.save();

        // Respond with success message
        res.json( 'Creation is successful' );
    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
};


export const signInMembers = async (req, res, next) => {
    const { u_name, u_email, u_pass, member_code } = req.body;
    if (!u_name || !u_email || !u_pass || !member_code || u_name === '' || u_email === '' || u_pass === '' || member_code === '') {
        next(errorHandler(400, 'All fields are required'));
    }
    try {
        const validMember = await Member.findOne({ u_email });
        if (!validMember) {
            next(errorHandler(404, 'Member not found'));
        }
        const validPassword = bcryptjs.compareSync(u_pass, validMember.u_pass);
        if (!validPassword) {
            next(errorHandler(400, 'Incorrect password'));
        }
        const token = jwt.sign(
            {
                id: validMember._id,
                isAdmin: validMember.isAdmin
            },
            process.env.SECRET
        );
        const { u_pass: pass, ...rest } = validMember._doc;
        res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true
            })
            .json(rest);
    } catch (error) {
        next(error);
    }
};
