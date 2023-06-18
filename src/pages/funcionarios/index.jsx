import MeuCard from "@/components/MeuCard";
import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const index = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/funcionarios").then((res) => {
      setFuncionarios(res.data);
    });
  }

  return (
    <Pagina titulo="funcionarios">
      <Link
        href={"/funcionarios/form"}
        className="btn mb-2"
        style={{ backgroundColor: "SlateBlue	" }}
      >
        <span style={{ color: "white" }}>Novo</span>
        <BsPlusCircle className="ms-1" />
      </Link>
      <Row>
        {funcionarios.map((item) => (
          <Col key={item.id}>
            <Link
              href={`/funcionarios/${item.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <MeuCard>
                <Card.Img src={item.foto} />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                </Card.Body>
              </MeuCard>
            </Link>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
