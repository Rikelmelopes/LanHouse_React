import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/computadores/${query.id}`).then((res) => {
        const disciplina = res.data;

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  function salvar(dados) {
    axios.put(`/api/computadores/${dados.id}`, dados);
    push("/computadores");
  }

  return (
    <Pagina titulo="Editar Computador">
      <Form>
        <Form.Group as={Col} controlId="marca">
          <Form.Label>Marca: </Form.Label>
          <Form.Control type="text" {...register("marca")} />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="placaVideo">
          <Form.Label>Placa de Video: </Form.Label>
          <Form.Control type="text" {...register("placaVideo")} />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="processador">
          <Form.Label>Processador: </Form.Label>
          <Form.Control type="text" {...register("processador")} />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="sistemaOperacional">
          <Form.Label>Sistema Operacional: </Form.Label>
          <Form.Control type="text" {...register("sistemaOperacional")} />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="armazenamento">
            <Form.Label>Armazenamento: </Form.Label>
            <Form.Control type="text" {...register("armazenamento")} />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="gabinete">
            <Form.Label>Gabinete: </Form.Label>
            <Form.Control type="text" {...register("gabinete")} />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link
            href={"/computadores"}
            className="ms-2 btn "
            style={{ backgroundColor: "SlateBlue	" }}
          >
            <BsArrowLeftCircleFill className="me-1" />
            <span style={{ color: "white" }}>Voltar</span>
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
