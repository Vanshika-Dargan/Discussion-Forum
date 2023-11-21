import express from 'express';
import {register} from '../controllers/user-controller.js'
import { userSchema } from '../validations/user-validate.js';
import { validate } from '../../../shared/middleware/validation.js';

export const userRoutes=express.Router();

userRoutes.post('/register',validate(userSchema),register)