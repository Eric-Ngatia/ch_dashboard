import React from 'react';
import './Connexion.css';
import {Link} from 'react-router-dom';

function Connexion() {
    return (
        <div className='connection'>
            

            <h1>Connexion</h1>

            <div className='card'>
                <div class="form-group">
                    <label for="Nom" class="col-form-label ">Nom & Prenom</label>
                    <div class="">
                        <input id="email" type="text" class="form-control" name="Nom"/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="Mot de Passe" class="col-form-label ">Mot de Passe</label>
                    <div class="">
                        <input id="password" type="password" class="form-control" name="Nom"/>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block shadow mt-3">
                    Se connecter
                </button>

                Si vous n'avez pas de compte veuillez <Link to='/Inscription'> Cliquez ici pour vous Inscrire </Link>
            </div>
        </div>
    )
}

export default Connexion