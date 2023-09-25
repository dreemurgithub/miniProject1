"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const express_1 = __importDefault(require("express"));
const pathURL_1 = require("../../routes/pathURL");
const userController = (0, express_1.default)();
exports.userController = userController;
require('dotenv').config();
userController.get(`${pathURL_1.user.url}/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`${pathURL_1.user.url}/:${id}`);
});
