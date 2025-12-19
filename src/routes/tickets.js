import { create } from "../controllers/tickets/ceate.js";

// separando as rotas de ticket em um unico arquivo
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
];
