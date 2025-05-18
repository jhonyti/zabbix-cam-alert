# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.
Este changelog utiliza anotações simples e não segue estritamente os padrões formais como o "Keep a Changelog" ou versionamento semântico.


## [v1.0.1] - 18-05-2025
*webhook-n8n-alerta*

*✅ Adicionado* -trigger
🕑1h Sem receber dados do agente

*🛠️ Corrigido* -trigger
(30m e 1h Sem receber dados do agente) 
--> não aparece como resolvido mais!

*🔄 Alterado* -trigger
Sem conxão agent - Down 
--> ⚠️Sem conexão com o agente
30m Sem dados do agent 
--> 🕑30m Sem receber dados do agente
30m e 1h Sem receber dados do agente severidade Media  
--> 30m e 1n Sem receber dados do agente severidade Alta 

<!-- Links para as tags -->
[v1.0.1]: https://github.com/jhonyti/zabbix-cam-alert/releases/tag/v1.0.1

---

## [v1.0.0] - 2025-05-17

### Adicionado
- Primeira versão funcional do sistema de alerta por câmera integrado ao Zabbix.
- Envio de alerta via n8n para Whatsapp. 
- Documentação inicial do projeto.

<!-- Links para as tags -->
[v1.0.0]: https://github.com/jhonyti/zabbix-cam-alert/releases/tag/v1.0.0

