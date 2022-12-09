import React from 'react';
import { Form, Link } from 'react-router-dom';
// import Royalty from '../../../public/video/Royalty.mp4'
import './Inscription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import axios from '../../Api/axios';
import  { useEffect, useRef, useState } from 'react';


function Inscription() {

    const REGISTER_URL = 'http://localhost:4000/register';


    const NAME_REGEX = /[aA-zZ]/;
    const PWD_REGEX = /^[ A-Za-z0-9_@./#&+-]*$/;
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
        e.preventDefault();
        // const v1 = NAME_REGEX.test(name);
        // const v2 = EMAIL_REGEX.test(email);
        // const v3 = PWD_REGEX.test(pwd);
        // if(v1 && v2 && v3) {
        //     setErrMsg('Invalid Entry');
        //     return;
        // }
        try {
            const response = await axios.post(REGISTER_URL, 
                JSON.stringify({name, pwd}),
                {
                    headers: {'Content-type': 'application/json'},
                    withCredentials : true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response?.data))
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 409) {
                setErrMsg('Name Taken');
            }else {
                setErrMsg('Registration Failed !')
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
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                        </label>
                        <div class="">
                            <input id="email" type="text" class="form-control"name="Nom" 
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
                    </div>

                    <div class="form-group">
                        <label for="Mot de Passe" class="col-form-label ">Mot de Passe
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <div class="">
                            <input id="password" type="password" class="form-control" name="Nom"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid = {validPwd ? "false" : "true"}
                                aria-describedby = "pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />

                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 caractères.<br />
                                
                            </p>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="Mot de Passe" class="col-form-label ">Confirmer votre Mot de Passe
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <div class="">
                            <input id="password" type="password" class="form-control" name="Nom"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid = {validPwd ? "false" : "true"}
                            aria-describedby = "pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Différent du premier mot de passe saisi.
                            </p>
                            
                        </div>
                    </div>

                    <button  type="submit" class="btn btn-primary btn-block shadow mt-3">
                        S'inscrire
                    </button>
                    <br />

                    Si vous avez déjà un compte veuillez <Link to='/Connexion'> Cliquez ici pour vous Connecter </Link>
            </form>
        </div>
    )
    }

export default Inscription