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
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/clientes").then((res) => {
      setClientes(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/clientes/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="Clientes">
      <Link
        href={"/clientes/form"}
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
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Numero</th>
            <th>Bairro</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/clientes/${item.id}`}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.dataNascimento}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
