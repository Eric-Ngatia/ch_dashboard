import React from 'react';
import './Home.css';
import Navigation from './Navigation';

function Home() {
    return (
        <div className='container'>
            <Navigation/>
            <div className='card__right'>
                <navbar>
                    <span>User-Name</span>
                    <button className='logout__btn'>LogOut</button>
                </navbar>
                
                <div className="rows">
                    <div className="box box__1">
                        <i class="fa-solid fa-chart-line"></i>
                        <h2>Total Quête Ord</h2>
                        <p> Montant  </p>
                    </div>


                    <div className="box box__2">
                        <i class="fa-solid fa-chart-line"></i>
                        <h2>Total Quête Spé</h2>
                        <p> Montant  </p>
                    </div>


                    <div className="box box__3">
                        <i class="fa-solid fa-chart-line"></i>
                        <h2>Total Quête Imp </h2>
                        <p> Montant  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home