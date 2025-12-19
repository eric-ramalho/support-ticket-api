import { create } from "../controllers/tickets/ceate.js";
import { index } from "../controllers/tickets/index.js";
// separando as rotas de ticket em um unico arquivo
export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
];
