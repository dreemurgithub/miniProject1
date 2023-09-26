"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const express_1 = __importDefault(require("express"));
const pathURL_1 = require("../../routes/pathURL");
const dataBaseURL_1 = require("../../dist/models/dataBaseURL");
const userController = (0, express_1.default)();
exports.userController = userController;
require("dotenv").config();
userController.get(`${pathURL_1.user.url}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const List = yield dataBaseURL_1.UserModel.find();
    console.log(List);
    res.send(List);
}));
userController.post(`${pathURL_1.user.url}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Userid = req.body && req.body.id ? req.body.id : null;
    const UserEmail = req.body && req.body.email ? req.body.email : null;
    const UserPassword = req.body && req.body.password ? req.body.password : null;
    if (!Userid || !UserEmail || !UserPassword) {
        res.status(400).send("Bad Request");
        return;
    }
    else {
        const newUser = new dataBaseURL_1.UserModel({
            email: UserEmail,
            password: UserPassword,
            userName: Userid,
        });
        yield newUser.save();
        res.send(newUser);
    }
}));
