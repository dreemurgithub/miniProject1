"use strict";
import mongoose, { Document, Schema } from 'mongoose';

require('dotenv').config()
if(process.env.MongoURL) mongoose.connect(process.env.MongoURL)

  
const userSchema = new mongoose.Schema({
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
})

const UserModel = mongoose.model('morUser',userSchema)
  
export {UserModel}