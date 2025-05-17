# zabbix-cam-alert
## 📸 Monitoramento de Câmeras via Zabbix + n8n + EvolutionAPI

Este projeto automatiza o monitoramento de câmeras IP e dispara alertas em diferentes canais, integrando:

- 🖥️ **Zabbix** (servidor de monitoramento)
- 🤖 **n8n** (orquestração de workflows)
- 🔗 **EvolutionAPI** (API de alerta / notificações)

---

### 🎯 Objetivo

Detectar indisponibilidade ou degradação de performance das câmeras a cada minuto e notificar equipes ou sistemas externos de forma automatizada.

---

### 🏗 Arquitetura Geral

```text
[Câmeras IP] ────► [Zabbix Agent (UserParameter)] ──► [Zabbix Server (VPS)]
      │                                               │
      │                                               ▼
      │                                        [Media Type JSON]
      │                                               │
      │                                               ▼
      └────────────────────────────────────────► [n8n Workflow]
                                                      │
                                                      ▼
                                              [EvolutionAPI / Bot]
```

Câmeras IP: equipamentos em diferentes locais, gerenciados por agentes Zabbix.

Zabbix Agent:

Usa UserParameter para executar:

Ping (latência / disponibilidade)

HTTP (status da interface web das câmeras)

Coleta métricas a cada 1 minuto.

Zabbix Server (hospedado em VPS):

Agrega dados de todos os agentes.

Aciona triggers de alerta quando detecta falha ou degradação.

Media Type customizado envia um payload JSON para o endpoint do n8n.

n8n:

Recebe o JSON do Zabbix.

Processa o conteúdo (parse, roteamento, enrich).

Chama a EvolutionAPI (endpoints de alertas) ou interage com um bot.

EvolutionAPI / Bot:

Distribui as notificações aos canais configurados (e-mail, Slack, Telegram etc.).

Futuras integrações: chat‐ops, dashboards em tempo real, etc.
