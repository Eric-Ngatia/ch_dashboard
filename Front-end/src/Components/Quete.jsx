import React from 'react';
import './Quete.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';



function Quete(props) {

    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");
    const [result4, setResult4] = useState("");
    const [result5, setResult5] = useState("");
    const [result6, setResult6] = useState("");
    const [result7, setResult7] = useState("");
    const [result8, setResult8] = useState("");
    const [result9, setResult9] = useState("");
    const [total, setTotal] = useState("");
    // setTotal = Math.sum(result)

    return (
        <div className='coins-box'>
            <form action="" method="post">

                <nav>
                    <div className='day'>
                        <label htmlFor=""> Jour & Date : </label> <br/>
                        <select name="" id="select__jour">
                            <option value="1">Lundi</option>
                            <option value="2">Mardi</option>
                            <option value="3">Mercredi</option>
                            <option value="4">Jeudi</option>
                            <option value="5">Vendredi</option>
                            <option value="6">Samedi</option>
                            <option value="7">Messe de Requiem</option>
                            <option value="8">Dimanche</option>
                        </select>
                        <input type="date" name="" id="date" />  <br/>

                        <div>
                            <label className='my-3' htmlFor="">Heure :</label>
                            <input type="time" name="" id="time" />
                        </div>

                        <div className='my-5'>
                            <select name="typeDeQuete" id="type__de__quete">
                                <option value="01">Quete Spe</option>
                                <option value="02">Quete Ord</option>
                                <option value="03">Quete Imp</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="">Montant total de la Quete du Jour :</label> <br/>
                        <input className='my-3' type="text" name="" id="total__coins" value={total} onChange={(e) => setTotal(e.target.value)} readOnly />
                    </div>
                </nav>

                <table>
                    <thead style={{textAlign:"center"}}>
                        <th>Nombre</th>
                        <th>Monnaie</th>
                        <th>Total obtenue</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td> <input type="number" defaultValue={0} name="10000" id="chiffre" onChange={(e) => setResult1(e.target.value*10000)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={10000} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result1} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="5000" id="chiffre" onChange={(e) => setResult2(e.target.value*5000)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={5000} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result2} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult3(e.target.value*2000)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={2000} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result3} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult4(e.target.value*1000)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={1000} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result4} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult5(e.target.value*500)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={500} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result5} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult6(e.target.value*200)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={200} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result6} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult7(e.target.value*100)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={100} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result7} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult8(e.target.value*50)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={50} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result8} /> </td>
                        </tr>

                        <tr>
                            <td> <input type="number" name="" id="chiffre" onChange={(e) => setResult9(e.target.value*25)} /> </td>
                            <td> <input type="text" name="" id="monnaie" readonly value={25} /> frcs</td>
                            <td> <input type="text" name="" id="result" readOnly value={result9} /> </td>
                        </tr>

                    </tbody>
                </table>

            </form>
        </div>
    )
}

export default Quete;