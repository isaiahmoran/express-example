"use strict";
/**
 * @swagger
 *  components:
 *    schemas:
 *      Ping:
 *        type: object
 *        required:
 *          - ping
 *        properties:
 *          ping:
 *            type: string
 *        example:
 *           ping: pong
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { ping } = require('../controllers/ping');
/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Returns a pong
 *     description: Returns a pong but more descriptive.
 */
router.get('/ping', ping);
exports.default = module.exports = router;
