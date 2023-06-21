import Pagina from "@/components/Pagina";
import clientesValidators from "@/validators/clientesValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    nome: yup
      .string()
      .required("O Nome é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    marca: yup
      .string()
      .required("A Marca é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    modelo: yup
      .string()
      .required("O Modelo é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    preco: yup
      .string("Somente Numeros")
      .required("O Preço é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
  })
  .required();

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function salvar(dados) {
    axios.post("/api/perifericos/mouse", dados);
    push("/perifericos");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Novo Mouse">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              {...register("nome", clientesValidators.nome)}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="marca">
            <Form.Label>Marca: </Form.Label>
            <Form.Control
              type="text"
              {...register("marca", clientesValidators.nome)}
            />
            {errors.marca && (
              <small className="text-danger">{errors.marca.message}</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="modelo">
            <Form.Label>Modelo: </Form.Label>
            <Form.Control
              type="text"
              {...register("modelo", clientesValidators.nome)}
            />
            {errors.modelo && (
              <small className="text-danger">{errors.modelo.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="preco">
            <Form.Label>Preço: </Form.Label>
            <Form.Control
              type="text"
              {...register("preco", clientesValidators.nome)}
            />
            {errors.preco && (
              <small className="text-danger">{errors.preco.message}</small>
            )}
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link
            href={"/perifericos"}
            className="ms-2 btn"
            style={{ backgroundColor: "SlateBlue" }}
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
