import mongoose, { Document, Schema } from "mongoose";

// messages
export interface Message extends Document {
    content: string;
    createdAt: Date
}
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

// user
export interface User extends Document {
    userName: string;
    email: string;
    password: string;
    verifycode: string;
    verifyCodeExpires: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true, "User name is required"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifycode: {
        type: String,
        required: [true, "Verification code is required"],
    },
    verifyCodeExpires: {
        type: Date,
        required: [true, "Verification code expiration date is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;