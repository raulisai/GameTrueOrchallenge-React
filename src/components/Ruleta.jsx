import React from 'react'
//img
import ruleta from '../img/ruletal.png'
import Baseruleta from '../img/base-ruleta.png'
import FlechaRuleta from '../img/flecha.png'
import './styles/ruleta.css'


export default function Ruleta() {
    return (
        <div>


<div className="">

<label for="customRange2" className="form-label container-fluid align-items-center  ">Example range</label>
<input type="range" className="form-range" min="0" max="5" id="customRange2" />
</div>

        <div>
        <img className="ruleta" src={ruleta} alt="Ruleta" />
        <img className="flechaRuleta" src={FlechaRuleta} alt="FlechaRuleta" />
        <img className="baseRuleta" src={Baseruleta} alt="BaseRuleta" />
        </div>

            
        </div>
    )
}
