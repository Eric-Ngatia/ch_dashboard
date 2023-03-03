import React from 'react';
import './Connexion.css';
import {Link} from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import axios from "../../Api/axios";


const LOGIN_URL = "/Auth";



function Connexion() {

    const { setAuth } = useContext(AuthContext);

    const nameRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [name, pwd])


    const handleSubmit = async (e) =>{
        console.log(name, pwd)
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({name, pwd}), 
                {
                    headers: { 'content-Type' : 'application/json' },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data))
            // console.log(JSON.stringify(response))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data.roles;
        setAuth({ name, pwd, roles, accessToken })
        setName('');
        setPwd('');
        setSuccess(true);
    
        } catch (err) {
            if(!err?.response) {
                setErrMsg('Pas de reponse du server');
            } else if (err.response?.status ===400) {
                setErrMsg ('Nom ou Mot de passe incorrect !');
            } else if (err.response?.status === 401) {
                setErrMsg('Accès Non autorisé');
            }else {
                setErrMsg('Echec de Connexion');
            }
            errRef.current.focus();
        }

    }



    return (
        <div className='connection'>
            
            <h1>Connexion</h1>

            <p ref={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
            </p>
            
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="Nom" class="col-form-label ">Nom & Prenom</label>
                    <div class="">
                        <input class="form-control"
                            id="name" type="text"
                            ref={nameRef}
                            autoComplete = "off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                </div>

                <div class="form-group">
                    <label for="Mot de Passe" class="col-form-label ">Mot de Passe</label>
                    <div class="">
                        <input class="form-control" 
                            id="password" type="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block shadow mt-3">
                    Se connecter
                </button>

            </form>

            <p style={{marginTop:'2rem'}}>Si vous n'avez pas de compte veuillez <Link to='/Inscription'> Cliquez ici pour vous Inscrire </Link></p>
        </div>
    )
}

export default Connexion