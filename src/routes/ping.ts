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

import express from 'express'

const router = express.Router()
const  {
    ping
} = require('../controllers/ping')


/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Returns a pong
 *     description: Returns a pong but more descriptive.
 */
router.get('/ping', ping)

export default module.exports = router