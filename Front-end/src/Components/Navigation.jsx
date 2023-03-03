import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';



function Navigation() {
    return (
        <div className='card__left' style={{height:"auto", width:"20%", border:"2px solid green",backgroundColor:"yellow", paddingLeft:"1.5rem"}}>
            <h1>DASHBOARD</h1>
            <div style={{marginTop:"2rem"}}>
                <h3> <Link to='/Home'> Acceuil </Link> </h3>
                <h3> <Link to='/Quete'> Versement </Link> </h3>
                <h3> <Link to='/Historique'> Historique </Link> </h3>
            </div>
        </div>
    )
}

export default Navigation;