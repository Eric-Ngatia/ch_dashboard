// react js 

import React, { useState } from 'react';
import './style.css';
function Table() {
    const [values, setValues] = useState([
        { id: 1, nombre: 0, monnaie: 25, sousTotal: 0 },
        { id: 2, nombre: 0, monnaie: 50, sousTotal: 0 },
        { id: 3, nombre: 0, monnaie: 100, sousTotal: 0 },
        { id: 4, nombre: 0, monnaie: 200, sousTotal: 0 },
        { id: 5, nombre: 0, monnaie: 500, sousTotal: 0 },
        { id: 6, nombre: 0, monnaie: 1000, sousTotal: 0 },
        { id: 7, nombre: 0, monnaie: 2000, sousTotal: 0 },
        { id: 8, nombre: 0, monnaie: 5000, sousTotal: 0 },
        { id: 9, nombre: 0, monnaie: 10000, sousTotal: 0 },
    ]);
    

    const handleChange = (id, field, value) => {
        const newValues = [...values];
        const index = newValues.findIndex((item) => item.id === id);
        const item = newValues[index];
        const newValue = { ...item, [field]: value };
        newValue.sousTotal = newValue.nombre * newValue.monnaie;
        newValues.splice(index, 1, newValue);
        setValues(newValues);
    };

    const total = values.reduce((acc, item) => acc + item.sousTotal, 0);

    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Monnaie</th>
                <th>Sous-Total</th>
            </tr>
            </thead>
            <tbody>
            {values.map((item) => (
                <tr key={item.id}>
                <td>
                    <input
                    type="number"
                    min={0}
                    default={0}
                    value={item.nombre}
                    onChange={(event) =>
                        handleChange(item.id, 'nombre', event.target.value)
                    }
                    />
                </td>
                <td>{item.monnaie}</td>
                <td>{item.sousTotal}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <div>
            Total: <input class="total" type="text" readOnly value={total} />
        </div>
        </div>
    );
}

export default Table;


                                        // STYLE CSS 
// h1,
// p {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }
// .table-container {
//   margin: auto;
//   max-width: 600px;
//   text-align: center;
// }

// table {
//   border-collapse: collapse;
//   width: 100%;
// }

// th, td {
//   padding: 8px;
//   text-align: center;
// }

// th {
//   background-color: #f2f2f2;
// }

// input[type="number"] {
//   width: 100%;
//   text-align: center;
//   border: none;
//   background-color: #f2f2f2;
//   padding: 8px;
// }

// .total {
//   margin-top: 16px;
//   text-align: right;
// }


