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
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/clientes/${query.id}`).then((res) => {
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
    axios.put(`/api/clientes/${dados.id}`, dados);
    push("/clientes");
  }

  return (
    <Pagina titulo="Editar Cliente">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text" {...register("nome")} />
          </Form.Group>

          <Form.Group as={Col} controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control
              type="text"
              mask="999.999.999-99"
              {...register("cpf")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="dataNascimento">
            <Form.Label>Data de Nascimento: </Form.Label>
            <Form.Control type="date" {...register("dataNascimento")} />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" {...register("email")} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="tel"
              mask="(99) 99999-9999"
              {...register("telefone")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              mask="99999-999"
              {...register("cep")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control type="text" {...register("logradouro")} />
          </Form.Group>

          <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control type="text" {...register("complemento")} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="numero">
            <Form.Label>Numero: </Form.Label>
            <Form.Control type="text" {...register("numero")} />
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control type="text" {...register("bairro")} />
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link
            href={"/clientes"}
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
