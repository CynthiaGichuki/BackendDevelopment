"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../Controller/authController");
const VerifyToken_1 = require("../Middlewares/VerifyToken");
const authrouter = (0, express_1.Router)();
authrouter.post('/register', authController_1.RegisterUser);
authrouter.post('/login', authController_1.loginUser);
authrouter.get('/home', VerifyToken_1.VerifyToken, authController_1.Homepage); //protected Route
exports.default = authrouter;
