export async function jsonHalndler(request, response) {
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }
  try {
    // Adicionando dentro da requisição a propriedad body para montar os chunks
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  response.setHeader("Content-Type", "application/json");
}
console.log();
