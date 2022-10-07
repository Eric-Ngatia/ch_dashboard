import React from 'react';
import { Form, Link } from 'react-router-dom';
// import Royalty from '../../../public/video/Royalty.mp4'
import './Inscription.css';
import axios from '../../Api/axios';
import  { useEffect, useRef, useState } from 'react';







function Inscription() {
    return (
        <div className='registration'>
            <h1>Inscription</h1>
            <div method='POST' className='card'>
                
                <div class="form-group">
                    <label for="Nom" class="col-form-label "> Nom & Prenom
                        
                    </label>
                    <div class="">
                        <input id="email" type="text" class="form-control"name="Nom" 
                            
                        />
                    </div>
                </div>

                <div class="form-group">
                    <label for="Mot de Passe" class="col-form-label ">Mot de Passe
                        
                    </label>
                    <div class="">
                        <input id="password" type="password" class="form-control" name="Nom"
                            
                        />
                    </div>
                </div>

                <div class="form-group">
                    <label for="Mot de Passe" class="col-form-label ">Confirmer votre Mot de Passe
                    </label>
                    <div class="">
                        <input id="password" type="password" class="form-control" name="Nom"
                        />
                        
                    </div>
                </div>

                <button  type="submit" class="btn btn-primary btn-block shadow mt-3">
                    S'inscrire
                </button>
                <br />

                Si vous avez déjà un compte veuillez <Link to='/Connexion'> Cliquez ici pour vous Connecter </Link>
            </div>
        </div>
    )
    }

export default Inscription