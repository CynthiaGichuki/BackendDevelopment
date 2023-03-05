"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
function VerifyToken(req, res, next) {
    const token = req.headers['token'];
    try {
        if (!token) {
            return res.status(401).json({ error: 'Forbidden' });
        }
        const Payloadata = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY);
        req.info = Payloadata;
    }
    catch (error) {
        res.status(403).json(error.message);
    }
    next();
}
exports.VerifyToken = VerifyToken;
