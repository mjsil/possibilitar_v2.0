import React from "react";

import "./styles.css";
import banner from "../../assets/banner.png";

const BannerComponent = () => {
  return (
    <section className="bg-home" id="home">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <h6 className="text-secondary">Mais de 150 vagas de estágio.</h6>
            <h1 className="display-4 fw-semibold mb-3">
              Encontre o estágio dos sonhos com a{" "}
              <span className="text-primary-theme fw-bold">POSSIBILITAR</span>.
            </h1>
            <p className="lead mb-0 text-secondary">
              Encontre o estágio perfeito para você, crie seu currículos online
              e enriqueça suas inscrições.
            </p>
          </div>

          <div className="col-lg-5">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
