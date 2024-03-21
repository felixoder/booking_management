import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import Member from '../models/member.model.js';

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
