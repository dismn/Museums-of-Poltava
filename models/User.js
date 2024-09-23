import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    museumName: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    mobileNumber: {
        type: String,
        required: true
    },

    comment: {
        type: String,
    }
});

export default mongoose.model('User', UserSchema);