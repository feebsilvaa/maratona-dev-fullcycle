

# Maratona Dev Fullcycle


# Microsserviços

* Microsserviços não são módulos
* Contextos
* DDD
* Baseado no negócio
* Pouca Responsabilidade
* Equipes menores e especializadas

## O que é um microsserviço?

* Disponibiliza informação
* Realiza transações
* Resolve problemas de negócio
* Independente de tecnologia ou protocolo
* Pode estabelecer comunicação com diversos "clientes"

### 9 Características dos Microsserviços (Martin Fowler)

1. Componentização via serviços
2. Organização em torno do negócio
3. Estrutura baseada em produtos, não em projetos.
4. Smart endpoints & Dumb pipes.
5. Governança descentralizada.
6. Descentralização no Gerenciamento de dados.
7. Automação de infraestrutura.
8. Desenhado para falhar
9. Design evolutivo.

# Estudo de caso

* Plataforma de transmissão de lives
* Gerenciador de Lives
* Lives precisam estar protegidas por senha
* A live deve ser transmitida via audio e video e esses dispositivos podem ser escolhidos pelo apresentador.
* Live deve possuir um chat.
* Quando a live é encerrada, todos devem ser desconectados e o chat não fica mais disponível.
* Não haverá recurso de gravação das lives.
* Live terá um bot no chat.

# Gerador de lives (lives-generator)

  * Visualização das lives criadas
  * Criação das lives
  * Peers para WebRTC
  * Websockets
  * gRPC Server

# Streaming

  * Transmissão
  * Visualização
  * Exibição do chat e interação no Chat  
    * Envio de comando para o CodeBot

# Chat
  * Comunicação em tempo real entre os participantes
  * Armazena as mensagens
  * Envia as mensagens para uma fila

# CodeBot
  * Retorna a resposta dos comandos enviados