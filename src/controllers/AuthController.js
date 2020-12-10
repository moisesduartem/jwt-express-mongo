import User from './../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtConfig from './../config/jwt';

class AuthController {
    async store(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: 'Credentials do not match.' });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) {
            return res.status(400).json({ message: 'Credentials do not match.' });
        }

        const { secret, expiresIn } = jwtConfig;

        const token = jwt.sign({}, secret, {
            subject: String(user._id),
            expiresIn
        });

        res.json({ user: user.show(), token, exp: expiresIn })

    }
}

export default new AuthController();