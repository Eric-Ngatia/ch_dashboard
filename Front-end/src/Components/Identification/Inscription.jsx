import React from 'react';
import { Link } from 'react-router-dom';
// import Royalty from '../../../public/video/Royalty.mp4'
import './Inscription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import axios from '../../Api/axios';
import  { useEffect, useRef, useState } from 'react';


function Inscription() {

    const REGISTER_URL = 'http://localhost:4000/Inscription';

    // /^[ A-Za-z0-9_@./#&+-]*$/

    const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[aA-zZ])(?=.*[0-9]).{5,24}$/;
    const nameRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setmatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('false');

    useEffect(() => {
        nameRef.current.focus();
    }, [])


    useEffect(() => {
        const result = NAME_REGEX.test(name);
        console.log(result);
        console.log(name);
        setValidName(result);
    }, [name])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect (() =>{
        setErrMsg('');
    }, [name, pwd, matchPwd])

    const handleSubmit = async (e) => {
        console.log(name, pwd)
        e.preventDefault();
        const v1 = NAME_REGEX.test(name);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg('Erreur, entrée invalide');
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, 
                JSON.stringify({name, pwd}),
                {
                    headers: {'Content-type':'application/json'},
                    withCredentials : true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response?.data))
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Pas de réponse du Serveur");
            } else if (err.response?.status === 409) {
                setErrMsg("Nom déjà utilisé");
            }else {
                setErrMsg("Echec d Inscription" + err)
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='registration'>
            <h1>Inscription</h1>
            <form method='POST' onSubmit={handleSubmit} className='card'>
                
                <p ref={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>

                    <div class="form-group">
                        <label for="Nom" class="col-form-label "> Nom & Prenom
                            <span className= {validName ? "valid" : "hide"} >
                                <FontAwesomeIcon icon={faCheck} />
                            </span>

                            <span className={validName || !name ? "hide" : "invalid"} >
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        
                        </label>
                        <input id="name" type="text" class="form-control"name="Nom" 
                                autoComplete="off"
                                ref={nameRef}
                                onChange= {(e) => setName(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby= "uidnote"
                                onFocus ={() => setNameFocus(true)}
                                onBlur = {() => setNameFocus(false)}
                            />
                            <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"} >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                S'il vous plaît entrer au minimum 4 caractères<br/>
                                Commençant par une lettre. <br/>
                            </p>
                    
                    </div>

                    <div class="form-group">
                        <label for="Password" class="col-form-label "> Mot de Passe
                            <span className= {validPwd ? "valid" : "hide"} >
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"} >
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input id="password" type="password" class="form-control"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid = {validPwd ? "false" : "true"}
                                aria-describedby = "pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p id="confirmnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Inscrire 5 caractères minimum dont des chiffres, des lettres et des caratères spéciaux !
                            </p>
                        
                    </div>

                    <div class="form-group">
                        <label for="Mot de Passe" class="col-form-label ">Confirmer votre Mot de Passe
                        <span className= {validMatch && matchPwd ? "valid" : "hide" } >
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPwd ? "hide" : "invalid"} >
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <div class="">
                            <input id="password" type="password" class="form-control" name="Nom"
                            onChange={(e) => setmatchPwd(e.target.value)}
                            required
                            aria-invalid = {validMatch ? "false" : "true"}
                            aria-describedby = "confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Mot de passe différent du premier saisi.
                            </p>
                            
                        </div>
                    </div>

                    <button  type="submit" disabled= { !validName || !validPwd || !validMatch ? true : false } class="btn btn-primary btn-block shadow mt-3">
                        S'inscrire
                    </button>
                    <br />

                    <p>Si vous avez déjà un compte veuillez <Link to='/Connexion'> Cliquez ici pour vous Connecter </Link></p>
            </form>
        </div>
    )
    }

export default Inscription