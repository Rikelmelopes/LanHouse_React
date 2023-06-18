import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [computadores, setClientes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/computadores").then((res) => {
      setClientes(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/computadores/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="computadores">
      <Link
        href={"/computadores/form"}
        className="btn mb-2"
        style={{ backgroundColor: "SlateBlue" }}
      >
        <span style={{ color: "white" }}>Novo</span>
        <BsPlusCircle className="ms-1" />
      </Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Placa de Video</th>
            <th>Processador</th>
            <th>sistema Operacional</th>
            <th>Armazenamento</th>
            <th>Gabinete</th>
          </tr>
        </thead>
        <tbody>
          {computadores.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/computadores/${item.id}`}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.marca}</td>
              <td>{item.placaVideo}</td>
              <td>{item.processador}</td>
              <td>{item.sistemaOperacional}</td>
              <td>{item.armazenamento}</td>
              <td>{item.gabinete}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
