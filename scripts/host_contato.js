const host = $json["host_name"];
let telefone = "";
let mensagem = $json["alert_message"];

switch (host) {
  case "Host A":
    telefone = "5511977777777";
    break;
  case "Host B":
    telefone = "5511988888888";
    break;
  case "Host C":
    telefone = "5511977777777";
    break;
  default:
    telefone = ""; // ou "default"
}

return [
  {
    json: {
      host,
      telefone,
      mensagem
    }
  }
];