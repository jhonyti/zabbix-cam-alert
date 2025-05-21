Monitoramento de Câmeras IP com Zabbix + n8n + EvolutionAPI (95 % No-Code)
<p align="center"> <img src="assets/logot.png" alt="zabbix-cam-alert logo" width="800"/> </p>

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white)](https://wa.me/5515996122003)
[![Email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:jhony.de.almeida@gmail.com)

Visão geral:
Uma solução low-code/no-code para monitorar câmeras IP com alertas em tempo real, documentando cada etapa e mudança do fluxo, sem precisar escrever quase nenhum código.

### Objetivo
- Monitorar continuamente a disponibilidade e a saúde de câmeras IP, identificando falhas e degradações para disparar alertas automáticos às equipes responsáveis — tudo isso com 95 % de 
- configuração via interface, minimizando scripts e maximizando reuso.

### Arquitetura No-Code
<p align="center"> <img src="assets/arquit.png" alt="Arquitetura Geral" width="800"/> </p>

### Coleta (Zabbix Agent)
- 95 % No-Code: configuração de UserParameters diretamente pela interface gráfica do Zabbix.
- Cada agente é registrado com dois UserParameters apontando para seu respectivo servidor:
- userparameter_ping: executa ping a cada 1 minuto para medir conectividade e latência da câmera.
- userparameter_http: executa curl na URL da interface web da câmera para validar o status HTTP (ex.: resposta “200 OK”).

Scripts auxiliares (Bash / Python / cmd / JS) são mantidos isolados, somando menos de ~30 linhas de código, e usados apenas para tratar a saída dos comandos.

### Processamento (Zabbix Server)
- Triggers de falha (ping perdido, HTTP ≠ 200) e Media Type JSON configurados pela UI.
- Envio automático do payload JSON ao n8n sem necessidade de código adicional.

### Orquestração (n8n)
- 95 % no-code: montagem de workflows visuais.
- Nós de parsing, enriquecimento e roteamento configurados por drag-and-drop.
- Pequenos trechos de JavaScript apenas quando indispensável (menos de 10% do fluxo).

### Alerta (EvolutionAPI)
- Conector REST configurado via interface.
- Envio de notificações a WhatsApp, Telegram, Slack e e-mail.
- Opções de resposta automática (por exemplo, cameras off/on) acionadas via nós de “HTTP Request”/“Webhook”.


### Componentes Detalhados

| Componente        | Tecnologia / Versão      | Função                                      |
|-------------------|--------------------------|---------------------------------------------|
| **Zabbix Server** | 6.x                      | Monitoramento centralizado                  |
| **Zabbix Agent**  | 6.x + UserParameters     | Coleta remota com scripts personalizados    |
| **n8n**           | 1.x                      | Orquestração de fluxos                      |
| **EvolutionAPI**  | v2 (interno)             | Entrega de notificações                     |
| **VMS de Câmera** | Windows 7, 10, 11        | Softwares VMS (Digifort, Milestone, ACS)    |

---

<!--
### 📌 Requisitos Futuros (Roadmap)

- [ ] Integração com painel de status em **Grafana**
- [ ] Autenticação de usuários via token JWT
- [ ] Mecanismo de **re-tentativa automática**
- [ ] Histórico de alertas e dashboard de métricas
-->