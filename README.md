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

### 🏗 Componentes e Fluxo Detalhado

#### 1. Câmeras IP  
Equipamentos distribuídos em diferentes locais, monitorados por agentes Zabbix instalados em servidores próximos a cada câmera.

#### 2. Zabbix Agent  
- **UserParameters** configurados para:  
  - **Ping**: verifica latência e disponibilidade da câmera.  
  - **HTTP**: confere status da interface web da câmera.  
- Coleta de métricas executada a cada **1 minuto**.

#### 3. Zabbix Server (VPS)  
- **Agregação de dados**: reúne todas as métricas dos agentes.  
- **Triggers de alerta**: dispara quando há falha (offline) ou degradação no serviço.  
- **Media Type customizado**: formata um **payload JSON** e envia para o endpoint do n8n.

#### 4. n8n  
- **Recepção do webhook**: recebe o JSON enviado pelo Zabbix.  
- **Processamento**: faz parse, roteamento e enrich dos dados.  
- **Integração**: aciona a **EvolutionAPI** ou executa ações adicionais via bot.

#### 5. EvolutionAPI / Bot  
- **Distribuição de notificações**: envia alertas para canais configurados (e‑mail, Slack, Telegram etc.).  
- **Expansões futuras**: integração com chat‑ops, dashboards em tempo real e outros sistemas de resposta automatizada.

### 🛠️ Ferramentas e Infraestrutura

- **Acesso HTTP**  
  - Utilizamos `curl` diretamente no terminal para sondar a interface web das câmeras e coletar status HTTP.

- **Servidores de Câmera (Windows VMs)**  
  - **Digifort**  
  - **Milestone**  
  - **ACS**

| Componente        | Tecnologia / Versão      | Descrição                                   |
| ----------------- | ------------------------ | ------------------------------------------- |
| Zabbix Server     | 6.x                      | Motor de monitoramento de infraestrutura    |
| Zabbix Agent      | 6.x (UserParameters)     | Coleta de métricas customizadas via scripts |
| n8n               | 1.x                      | Orquestração de workflows sem código        |
| EvolutionAPI      | Interna / v2             | API REST para envio de alertas              |
| Linguagens        | Python / Bash / JSON     | Scripts de coleta e payloads                |
| Infraestrutura    | VPS Linux (Ubuntu 22.04) | Hospedagem do servidor Zabbix               |
| Câmeras IP (VMs)  | Windows Server           | VMs rodando Digifort, Milestone e ACS       |


