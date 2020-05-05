

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


# Desafio 01

1. Instalar o Node.js em seu computador

2. Criar um webserver que escuta na porta 3000

3. Ao acessar o webserver, a seguinte mesagem deverá aparecer: "Maratona Full Cycle 2.0"

4. Instalar o Docker em seu computador

5. Gerar uma imagem Docker dessa aplicação a partir da imagem node:14.1-alpine.
  
  sudo docker builb -t dockerhub-id/nome-imagem .

6. Publicar a imagem no Dockerhub

  sudo docker push dockerhub-id/nome-imagem

7. Quando executarmos: docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem deveremos ver a mensagem na porta 3000 de nosso browser

  sudo docker run -it -d -p 3000:3000 feebsilvaa/maratona-dev-fullcycle

8. Postar nos comentários do vídeo a URL da sua imagem para que possamos executar
