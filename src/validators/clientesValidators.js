const clientesValidators = {
  nome: {
    required: "Nome obrigatório",
    minLength: { value: 3, message: "Mínimo de 3 caracteres" },
  },
  cpf: { required: "CPF Obrigatório" },
};
export default clientesValidators;
