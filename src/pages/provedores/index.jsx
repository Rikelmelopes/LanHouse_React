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
  const [provedores, setClientes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/provedores").then((res) => {
      setClientes(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Deseja apagar esse provedor?")) {
      axios.delete(`/api/provedores/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="Provedores">
      <Link
        href={"/provedores/form"}
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
            <th>Cnpj</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {provedores.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/provedores/${item.id}`}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.cnpj}</td>
              <td>{item.telefone}</td>
              <td>{item.endereco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
