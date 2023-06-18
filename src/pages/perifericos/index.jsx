import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table, Row, Col } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [fone, setFone] = useState([]);
  const [mouse, setMouse] = useState([]);
  const [teclado, setTeclado] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/perifericos/fone").then((res) => {
      setFone(res.data);
    });
    axios.get("/api/perifericos/mouse").then((res) => {
      setMouse(res.data);
    });
    axios.get("/api/perifericos/teclado").then((res) => {
      setTeclado(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja apagar esse periferico?")) {
      axios.delete(`/api/perifericos/teclado/${id}`);
      axios.delete(`/api/perifericos/fone/${id}`);
      axios.delete(`/api/perifericos/mouse/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="perifericos">
      <Row>
        <Col>
          <Link
            href={"/perifericos/fone/form"}
            className="btn mb-2"
            style={{ backgroundColor: "SlateBlue" }}
          >
            <span style={{ color: "white" }}>Novo Fone</span>
            <BsPlusCircle className="ms-1" />
          </Link>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {fone.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/perifericos/fone/${item.id}`}>
                      <BsFillPencilFill className="me-2 text-primary" />
                    </Link>
                    <BsFillTrashFill
                      onClick={() => excluir(item.id)}
                      className="text-danger"
                    />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.preco}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Link
            href={"/perifericos/teclado/form"}
            className="btn mb-2"
            style={{ backgroundColor: "SlateBlue" }}
          >
            <span style={{ color: "white" }}>Novo Teclado</span>
            <BsPlusCircle className="ms-1" />
          </Link>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {teclado.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/perifericos/teclado/${item.id}`}>
                      <BsFillPencilFill className="me-2 text-primary" />
                    </Link>
                    <BsFillTrashFill
                      onClick={() => excluir(item.id)}
                      className="text-danger"
                    />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.preco}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Link
            href={"/perifericos/mouse/form"}
            className="btn mb-2"
            style={{ backgroundColor: "SlateBlue" }}
          >
            <span style={{ color: "white" }}>Novo Mouse</span>
            <BsPlusCircle className="ms-1" />
          </Link>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {mouse.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href={`/perifericos/mouse/${item.id}`}>
                      <BsFillPencilFill className="me-2 text-primary" />
                    </Link>
                    <BsFillTrashFill
                      onClick={() => excluir(item.id)}
                      className="text-danger"
                    />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.preco}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
