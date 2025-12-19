import express from 'express'
import { helloWorld, generateResponse } from '../controllers/app.controllers.js';

const router = express.Router();

router.route("/helloWorld").get(helloWorld)

router.route("/chat/completions").post(generateResponse)

export default router;