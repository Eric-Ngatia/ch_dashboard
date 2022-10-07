import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='container'>
            <div className='card__left'>
                <h1>DASHBOARD</h1>

                <hr/>
                <h3> <i class="fa-solid fa-wallet"></i> Versement</h3>
            </div>

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