// separando as rotas de ticket em um unico arquivo
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Criado com sucesso!");
    },
  },
];
