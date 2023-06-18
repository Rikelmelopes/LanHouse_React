import Pagina from "@/components/Pagina";
import clientesValidators from "@/validators/clientesValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";

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
      axios.get(`/api/perifericos/mouse/${query.id}`).then((res) => {
        const disciplina = res.data;

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/perifericos/mouse/${dados.id}`, dados);
    push(`/perifericos/`);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Editar Mouse">
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
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
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
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="preco">
            <Form.Label>Preço: </Form.Label>
            <Form.Control
              type="text"
              {...register("preco", clientesValidators.nome)}
            />
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
