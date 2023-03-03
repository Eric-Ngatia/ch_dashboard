import React from 'react';
import './Quete.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Navigation from './Navigation';



function Quete() {

    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");
    const [result4, setResult4] = useState("");
    const [result5, setResult5] = useState("");
    const [result6, setResult6] = useState("");
    const [result7, setResult7] = useState("");
    const [result8, setResult8] = useState("");
    const [result9, setResult9] = useState("");

    const total =  result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9;

    

    return (
        <div className='coins-box'>
            <Navigation/>
            <div action="" method="post">
                <nav>
                    <div className='day'>
                        <label htmlFor=""> Messe & Date : </label> <br/>
                        <select name="" id="select__jour">
                            <option value="1">Lundi</option>
                            <option value="2">Mardi</option>
                            <option value="3">Mercredi</option>
                            <option value="4">Jeudi</option>
                            <option value="5">Vendredi</option>
                            <option value="6">Samedi</option>
                            <option value="7">Dimanche</option>
                            <option value="8">Requiem</option>
                        </select>
                        <input type="date" name="" id="date" />  <br/>

                        <div>
                            <label className='my-3' htmlFor="">Heure:</label>
                            <input type="time" name="" id="time" />
                        </div>

                        <div className='my-3'>
                            <label htmlFor="" className= 'mx-1'>Type de Quête: </label>
                            <select name="typeDeQuete" id="type__de__quete">
                                <option value="01">Quête Ordinaire</option>
                                <option value="02">Quête Spéciale</option>
                                <option value="03">Quête Impérée</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="">Montant total de la Quete du Jour :</label> <br/>
                        <input className='my-3' type="number" name=""  id="total__coins" value={total} readOnly />
                    </div>
                </nav>

                <div className='table'>
                    <table>
                        <thead >
                            <th>Nombre</th>
                            <th>Monnaie</th>
                            <th>Total obtenue</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td> <input type="number" min={0} defaultValue={0}  name="10000" id="chiffre" onChange={(e) => setResult1(e.target.value*10000)} /> </td>
                                <td> <input type="" name="" id="monnaie" readonly value={10000} /> frcs</td>
                                <td> <input type="number" name="" defaultValue={0} id="result" readOnly value={result1} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="5000" id="chiffre" onChange={(e) => setResult2(e.target.value*5000)} /> </td>
                                <td> <input type="" name="" id="monnaie" readonly value={5000} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result2} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult3(e.target.value*2000)} /> </td>
                                <td> <input type="" name="" id="monnaie" readonly value={2000} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result3} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult4(e.target.value*1000)} /> </td>
                                <td> <input  name="" id="monnaie" readonly value={1000} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result4} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult5(e.target.value*500)} /> </td>
                                <td> <input  name="" id="monnaie" readonly value={500} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result5} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult6(e.target.value*200)} /> </td>
                                <td> <input  name="" id="monnaie" readonly value={200} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result6} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult7(e.target.value*100)} /> </td>
                                <td> <input  name="" id="monnaie" readonly value={100} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result7} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult8(e.target.value*50)} /> </td>
                                <td> <input  name="" id="monnaie" readonly value={50} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result8} /> </td>
                            </tr>

                            <tr>
                                <td> <input type="number" min={0}  name="" id="chiffre" onChange={(e) => setResult9(e.target.value*25)} /> </td>
                                <td> <input  name="" id="monnaie" readonly value={25} /> frcs</td>
                                <td> <input type="number" name="" id="result" readOnly value={result9} /> </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                {/* <------Submit Button------> */}
                <button className='w-100 btn-primary mx-2' type="submit">Sauvegarder</button>
            </div>
        </div>
    )
}

export default Quete;