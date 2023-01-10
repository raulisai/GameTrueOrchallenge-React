import React from "react";
import Ruleta from "../components/Ruleta";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 mb-5">
          <div class="contentheder">
            <div class="visible">
              <p>GAME</p>
              <ul>
                <li>-Verdad!</li>
                <li>-Or </li>
                <li>-Reto!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
      <div className="col-sm-6">
        <figure className="icon-cards mt-5 ml-4">
          <div className="icon-cards__content ">
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <span className="h1">Puedes personalizar el juego precionando en el engrane de en medio......🙂</span>
            </div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <span className="h1">Puedes enviar preguntas y retos personalizados a tus amigo, nose piensalo....😊</span>
            </div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <span className="h1">Si reciviste una invitacion y tienes un hash ve a la seccion de codigos😀</span>
            </div>
          </div>
        </figure>

        <div className="checkbox">
          <input className="d-none" id="toggle-animation" type="checkbox" checked />
          <label className="checkbox__checkbox" for="toggle-animation"></label>
          <label className="checkbox__label" for="toggle-animation">
            Parar animacion
          </label>
        </div>
        </div>
        <div className="col-sm-6">
        <Ruleta />
        </div>
      </div>
    </>
  );
}
