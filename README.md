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
