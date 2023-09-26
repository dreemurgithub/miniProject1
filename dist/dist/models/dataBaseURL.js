"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
if (process.env.MongoURL)
    mongoose_1.default.connect(process.env.MongoURL);
const userSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});
const UserModel = mongoose_1.default.model('morUser', userSchema);
exports.UserModel = UserModel;
