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
    marca: yup
      .string("Somente Letras")
      .required("A marca é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    placaVideo: yup
      .string()
      .required("A Placa de Video Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    processador: yup
      .string()
      .required("O processador é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    sistemaOperacional: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("O Sistema Operacional é Obrigatório"),
    armazenamento: yup
      .string()
      .required("O Armazenamento é Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    gabinete: yup
      .string()
      .required("O Gabinete é Obrigatório")
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
    axios.post("/api/computadores", dados);
    push("/computadores");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Novo Computador">
      <Form>
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

        <Form.Group as={Col} controlId="placaVideo">
          <Form.Label>Placa de Video: </Form.Label>
          <Form.Control
            type="text"
            {...register("placaVideo", clientesValidators.nome)}
          />
          {errors.placaVideo && (
            <small className="text-danger">{errors.placaVideo.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="processador">
          <Form.Label>Processador: </Form.Label>
          <Form.Control
            type="text"
            {...register("processador", clientesValidators.nome)}
          />
          {errors.processador && (
            <small className="text-danger">{errors.processador.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="sistemaOperacional">
          <Form.Label>Sistema Operacional: </Form.Label>
          <Form.Control
            type="text"
            {...register("sistemaOperacional", clientesValidators.nome)}
          />
          {errors.sistemaOperacional && (
            <small className="text-danger">
              {errors.sistemaOperacional.message}
            </small>
          )}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="armazenamento">
            <Form.Label>Armazenamento: </Form.Label>
            <Form.Control
              type="text"
              {...register("armazenamento", clientesValidators.nome)}
            />
            {errors.armazenamento && (
              <small className="text-danger">
                {errors.armazenamento.message}
              </small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="gabinete">
            <Form.Label>Gabinete: </Form.Label>
            <Form.Control
              type="text"
              {...register("gabinete", clientesValidators.nome)}
            />
            {errors.gabinete && (
              <small className="text-danger">{errors.gabinete.message}</small>
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
            className="ms-2 btn"
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
