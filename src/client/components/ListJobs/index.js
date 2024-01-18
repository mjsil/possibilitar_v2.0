import React from "react";

import "./styles.css";
import americanas from "../../assets/americanas.png";

const ListJobsComponent = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-4">
              <h4>Novas Vagas Todo Dia</h4>
              <p className="text-secondary">
                Encontre o estágio perfeito para você, mais de 150 vagas de
                estágio.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mt-4">
              <div className="p-4">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center">
                    <img
                      src={americanas}
                      alt=""
                      className="img-fluid rounded-3"
                      width="60"
                    />
                  </div>

                  <div className="col-md-3">
                    <div className="mb-2 mb-md-0">
                      <h5 className="mb-1">Menor Aprendiz</h5>
                      <p className="text-secondary mb-0">Americanas LTDA</p>
                    </div>
                  </div>

                  <div className="col-md-5 ">
                    <p className="text-secondary mb-0 truncate-text">
                      A tarefa do aprendiz, na maioria das vezes, é de caráter
                      administrativo e tem como papel principal exercer o
                      aprendizado, mostrar os desafios e encaixá-lo na rotina de
                      trabalho. No Brasil, o aprendiz é amparado pela lei do
                      Aprendiz, aprovada no ano 2000 e regulamentada em 2005.
                    </p>
                  </div>

                  <div className="col-md-2">
                    <div className="text-md-end">
                      <p className="fw-semibold">R$ 600,00</p>
                      <a href="#">Ver Detalhes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5 pt-3">
              <a href="#" className="btn text-white px-4">
                Ver Todas{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListJobsComponent;
