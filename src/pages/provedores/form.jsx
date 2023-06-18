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

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    axios.post("/api/provedores", dados);
    push("/provedores");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Novo Provedor">
      <Form>
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

        <Form.Group as={Col} controlId="cnpj">
          <Form.Label>CNPJ:</Form.Label>
          <Form.Control
            type="text"
            mask="99.999.999/9999-99"
            {...register("cnpj")}
            onChange={handleChange}
          />
        </Form.Group>

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

          <Form.Group as={Col} controlId="endereco">
            <Form.Label>Endereço: </Form.Label>
            <Form.Control
              type="text"
              {...register("endereco", clientesValidators.nome)}
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
            href={"/provedores"}
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
