# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.
Este changelog utiliza anotações simples e não segue estritamente os padrões formais como o "Keep a Changelog" ou versionamento semântico.


(alerta) [v1.0.5] - 18-05-2025

### *✅ Adicionado* 
*n8n*
- adicionado um novo flow de envio para clientes especificos.
- ![script].(https://github.com/jhonyti/zabbix-cam-alert/blob/main/scripts/hot_contato.js) do node, com (case) para envio de msg  para numeros especificos.

### *🛠️ Corrigido* 
*trigger*
erro no envido de msg de recuperação, de 30m e 1h
adiciona lista de cameres faltante no servidor IHB.
correção de nomes de triggers no servidor ACP.

### *🔄 Alterado* 
tempo de checagem de cameras no servidor IHB, antes: 3m 2 verificações 
agora: 4m 3 verificações. 

-->
<!-- Links para as tags -->
[v1.0.5]: https://github.com/jhonyti/zabbix-cam-alert/releases/tag/v1.0.5


## (alerta) [v1.0.1] - 18-05-2025

### *✅ Adicionado* 
- trigger
- 🕑1h Sem receber dados do agente

### *🛠️ Corrigido* 
- trigger
- (30m e 1h Sem receber dados do agente)
- --> não aparece como resolvido mais!

### *🔄 Alterado* 
- trigger
- Sem conxão agent - Down
- --> ⚠️Sem conexão com o agente
- 30m Sem dados do agent
- --> 🕑30m Sem receber dados do agente
- 30m e 1h Sem receber dados do agente severidade Media
- --> 30m e 1n Sem receber dados do agente severidade Alta

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

