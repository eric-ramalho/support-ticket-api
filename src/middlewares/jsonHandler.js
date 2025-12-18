// request → tudo que vem do cliente
// response → o que você vai devolver
// Ela é async porque vai lidar com dados que chegam em partes (stream).
export async function jsonHalndler(request, response) {
  // Quando alguém faz um POST com JSON, o corpo não chega tudo de uma vez.
  // Ele chega em pedaços (chunks).
  // Então você precisa:
  // guardar os pedaços
  // juntar depois
  const buffers = [];

  // “Enquanto dados estiverem chegando na requisição, vá capturando cada pedaço e jogando no array.”
  // request é uma stream
  // chunk é um pedaço do body
  // for await espera até tudo chegar
  for await (const chunk of request) {
    buffers.push(chunk);
  }
  try {
    // Adicionando dentro da requisição a propriedad body para montar os chunks
    //     O que acontece aqui:
    // 1️⃣ Buffer.concat(buffers)
    // junta todos os pedaços num só
    // 2️⃣ .toString()
    // transforma de bytes → texto
    // 3️⃣ JSON.parse(...)
    // transforma texto → objeto JS
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  response.setHeader("Content-Type", "application/json");
}
