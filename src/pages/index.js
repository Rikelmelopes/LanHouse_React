import Pagina from "@/components/Pagina";
import React from "react";
import { Card, Button } from "react-bootstrap";

const Index = () => {
  return (
    <Pagina titulo="Pagina de Apresentação">
      <div className="text-center">
        <br></br>
        <a
          href="https://camo.githubusercontent.com/3982f9559f717912199467f7a8b62373d9dcf46aae84810b603eeed8baa54ff6/687474703a2f2f7777772e7267696e666f726d61746963612e636f6d2e62722f6c6f676f6c616e2e6a7067"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://camo.githubusercontent.com/3982f9559f717912199467f7a8b62373d9dcf46aae84810b603eeed8baa54ff6/687474703a2f2f7777772e7267696e666f726d61746963612e636f6d2e62722f6c6f676f6c616e2e6a7067"
            alt="Imagem"
            style={{ maxWidth: "50%", margin: "auto" }}
          />
        </a>
      </div>
      <br />
      <br></br>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  border: "1px solid blue",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center">Intuito</Card.Title>
                  <Card.Text>
                    Esse programa foi criado no intuito de facilitar no
                    gerenciamento e controle de sua Lan House.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  border: "1px solid blue",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center">Informações</Card.Title>
                  <Card.Text>
                    Aqui você consegue excluir , adicionar e editar todas as
                    tabelas criadas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  border: "1px solid blue",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center">Dicas</Card.Title>
                  <Card.Text>
                    Navegue facilmente pelas tabelas e paginas ultilizando o
                    Navbar no topo da pagina.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Pagina>
  );
};

export default Index;
