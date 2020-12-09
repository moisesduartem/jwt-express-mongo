import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    }, 
}, {
    timestamps: true
});

export default model('User', UserSchema);