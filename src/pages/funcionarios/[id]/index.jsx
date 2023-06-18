import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [funcionarios, setFuncionario] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/funcionarios/${query.id}`).then((res) => {
        setFuncionario(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina titulo={funcionarios.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir {funcionarios.nome}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Outro funcionario que vacilou , né !!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/funcionarios/${funcionarios.id}`);
              push("/funcionarios");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <Card>
            <Card.Img src={funcionarios.foto} />
          </Card>
        </Col>
        <Col>
          <div
            style={{ border: "1px solid SlateBlue", borderRadius: "5px" }}
            className="p-3"
          >
            <p>CPF: {funcionarios.cpf}</p>
            <p>CEP: {funcionarios.cep}</p>
            <p>Data de Nascimento: {funcionarios.dataNascimento}</p>
            <p>Email: {funcionarios.email}</p>
            <p>Telefone: {funcionarios.telefone}</p>
            <p>Logradouro: {funcionarios.logradouro}</p>
            <p>Bairro: {funcionarios.bairro}</p>
            <p>Número: {funcionarios.numero}</p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "LightSeaGreen	" }}
                  href={`${funcionarios.id}/form`}
                >
                  <span style={{ color: "white" }}>Editar</span>
                </Link>
              </Col>
              <Col>
                <Link
                  href={"/funcionarios"}
                  className="ms-2 btn"
                  style={{ backgroundColor: "SlateBlue	" }}
                >
                  <span style={{ color: "white" }}>Voltar</span>
                </Link>
              </Col>
              <Col>
                <Button onClick={excluir} className="btn btn-danger">
                  Excluir
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
