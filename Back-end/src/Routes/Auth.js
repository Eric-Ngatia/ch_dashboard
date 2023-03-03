import express from 'express';
import  { Connexion, Inscription } from '../Controllers/AuthControllers.js';

export const router = express.Router();

router.post('/Inscription', Inscription);
router.post('/Connexion', Connexion);