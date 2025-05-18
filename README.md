# 📡 zabbix-cam-alert
[![Group](https://img.shields.io/badge/Group-grey)](https://link-do-grupo)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white)](https://link-do-whatsapp)
[![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white)](https://link-do-discord)
[![Community](https://img.shields.io/badge/Community-blue)](https://link-da-comunidade)
[![Postman](https://img.shields.io/badge/Postman-orange?logo=postman&logoColor=white)](https://link-postman)
[![Collection](https://img.shields.io/badge/Collection-orange)](https://link-da-collection)
[![Documentation](https://img.shields.io/badge/Documentation-grey)](https://link-da-documentacao)
[![Official](https://img.shields.io/badge/Official-brightgreen)](https://link-oficial)
[![License](https://img.shields.io/badge/license-grey)](https://link-da-licenca)
[![Apache-2.0](https://img.shields.io/badge/Apache--2.0-blue)](https://choosealicense.com/licenses/apache-2.0/)
[![Donation](https://img.shields.io/badge/Donation-grey)](https://link-de-doacao)
[![PicPay](https://img.shields.io/badge/picpay-brightgreen)](https://picpay.me/seuusuario)
[![GitHub](https://img.shields.io/badge/Github-grey?logo=github)](https://github.com/seu-repositorio)
[![Sponsor](https://img.shields.io/badge/sponsor-orange)](https://link-de-patrocinio)


<p align="center">
  <img src="assets/logo.png" alt="zabbix-cam-alert logo" width="900"/>
</p>

## 📸 Monitoramento de Câmeras IP com Zabbix + n8n + EvolutionAPI

Automatize o monitoramento de câmeras IP e receba alertas em tempo real por meio de uma integração eficiente entre:

- 🖥️ **Zabbix** – Monitoramento de infraestrutura
- 🔧 **n8n** – Orquestração e automação de fluxos
- 📲 **EvolutionAPI** – API para envio de notificações

---

### 🎯 Objetivo

Monitorar continuamente a disponibilidade e desempenho das câmeras IP, identificando falhas ou degradações e disparando alertas automáticos para as equipes responsáveis.

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

> ✅ Uma imagem dessa arquitetura também está disponível em `docs/fluxo.png`.

---

### ⚙️ Componentes e Fluxo Detalhado

#### 1. **Câmeras IP**  
Dispositivos distribuídos em diferentes locais, monitorados por agentes Zabbix instalados próximos (em OS.Windows).

#### 2. **Zabbix Agent**  
UserParameters configurados para:
- `ping`: Verifica conectividade e latência
- `http`: Verifica status da interface web da câmera

🕒 Coleta realizada a cada **1 minuto**.

#### 3. **Zabbix Server (VPS)**  
- Centraliza os dados dos agentes
- Define **triggers** para falhas ou degradações
- Envia alertas via **Media Type JSON** para o n8n

#### 4. **n8n (Workflow Engine)**  
- Recebe o webhook com dados JSON
- Realiza parsing, enriquecimento e roteamento dos dados
- Dispara alertas para a **EvolutionAPI** ou bots personalizados

#### 5. **EvolutionAPI / Bot**  
- Envia notificações para canais como WhatsApp, Telegram, Slack ou e-mail
- Pode acionar **respostas automatizadas** (ex: reinício de serviços)

---

### 🛠️ Tecnologias e Infraestrutura

- **Zabbix Server:** v6.x – Motor de monitoramento
- **Zabbix Agent:** v6.x – Com `UserParameter` para scripts customizados
- **n8n:** v1.x – Plataforma low-code para automações
- **EvolutionAPI:** v2 – API RESTful para envio de alertas
- **Linguagens:** Python / Bash / JSON – Para coleta, parsing e envio
- **Infraestrutura:** VPS Linux (Ubuntu 22.04)
- **VMs de Câmeras:** Windows Server com:
 
  - Digifort
  - Milestone
  - Axis Camera Station (ACS)

| Componente        | Tecnologia / Versão      | Função                                      |
|-------------------|--------------------------|---------------------------------------------|
| **Zabbix Server** | 6.x                      | Monitoramento centralizado                  |
| **Zabbix Agent**  | 6.x + UserParameters     | Coleta remota com scripts personalizados    |
| **n8n**           | 1.x                      | Orquestração de fluxos                      |
| **EvolutionAPI**  | v2 (interno)             | Entrega de notificações                     |
| **VMs de Câmera** | Windows Server           | Softwares VMS (Digifort, Milestone, ACS)    |
| **Scripts**       | Python / Bash / JSON     | Utilizados para coleta e envio de dados     |

---

### 📌 Requisitos Futuros (Roadmap)

- [ ] Integração com painel de status em **Grafana**
- [ ] Autenticação de usuários via token JWT
- [ ] Mecanismo de **re-tentativa automática**
- [ ] Histórico de alertas e dashboard de métricas
