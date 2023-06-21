import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import { mask } from "remask";

const schema = yup
  .object({
    nome: yup
      .string("Somente Letras")
      .required("O Nome Obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    cpf: yup.string().required("CPF Obrigatório").min(14, "Preencha o CPF"),
    dataNascimento: yup.string().required("Data Obrigatoria"),
    email: yup
      .string()
      .email("Use um email válido")
      .required("Email é Obrigatório"),
    telefone: yup
      .string()
      .required("Telefone Obrigatório")
      .min(5, "Mínimo de 5 caracteres"),
    cep: yup
      .string()
      .required("CEP Obrigatório")
      .min(9, "Maximo de 9 caracteres"),
    logradouro: yup
      .string()
      .required("Logradouro Obrigatório")
      .min(3, "Mínimo de 3 caracteres")
      .max(20, "Máximo de 20 caracteres"),
    complemento: yup.string().max(20, "Máximo de 20 caracteres"),
    numero: yup.number("Tem que ser Número"),
    bairro: yup.string().required().max(50, "Máximo de 50 caracteres"),
    foto: yup
      .string()
      .required("Foto Obrigatória")
      .min(5, "Mínimo de 5 caracteres")
      .url("Coloque uma URL válida"),
  })
  .required();

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm();
  const checkCEP = (e) => {
    if (!e.target.value) return;
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
        setFocus("numero");
      });
  };

  const [funcionario, setCliente] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/funcionarios/${query.id}`).then((res) => {
        const disciplina = res.data;
        setCliente(res.data);

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/funcionarios/${dados.id}`, dados);
    push(`/funcionarios/${funcionario.id}`);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Novo funcionario">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Coloque seu Nome"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="123.456.789.09"
              mask="999.999.999-99"
              {...register("cpf")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              placeholder="exemplo@teste.com"
              type="email"
              {...register("email", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="tel"
              placeholder="(01) 23456-78909"
              mask="(99) 99999-9999"
              {...register("telefone")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              placeholder="12345-678"
              type="text"
              {...register("cep")}
              onBlur={checkCEP}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="dataNascimento">
            <Form.Label>Data de Nascimento: </Form.Label>
            <Form.Control type="date" {...register("dataNascimento")} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              {...register("logradouro", { maxLength: 100 })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              {...register("complemento", { maxLength: 100 })}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="numero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              mask="999"
              {...register("numero")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control type="text" {...register("bairro")} />
          </Form.Group>
        </Row>
        <Form.Group controlId="foto" className="mb-3">
          <Form.Label>Foto: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Coloque sua Imagem"
            {...register("foto")}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link
            href={`/funcionarios/${funcionario.id}`}
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
