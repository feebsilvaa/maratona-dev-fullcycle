

# Maratona Dev Fullcycle

## Microsserviços de Chat e CodeBotC

### gRPC

* gRPC é um framework desenvolvido pela Google
* Faz pare da CNCF

### Em quais casos podemos utilizar?

* Ideal para microsserviços
* Mobile, Browsers e Backend
* Geração das bibliotecas de forma automática
* Streaming bidirecional utilizando HTTP/2

### Liguagens (Suporte Oficial)

* gRPC-GO
* gRPC-Java
* gRPC-C
  * C++
  * Python
  * Ruby
  * Objctive C
  * PHP
  * c#
  * Node.js

### RPC - Remote Procedure Call

### Protocol Buffers vs JSON

* Arquivos binários < JSON
* Processo de serialização é mais leve (CPU) do que json
* Gasta menos recuros de rede
* Processo é mais rápido

#### Protocol Buffer

```
  syntax = "proto3";

  message SearchRequest {
    string query = 1;
    int32 page_number = 2;
    int32 result_per_page = 3;
  }
```

### HTTP/2

* Nome original criado pela Google era SPDY
* Lançado em 2015
* Dados trafegados são binários e não texto como no HTTP 1.1
* Utiliza a mesma conexão TCP para enviar e receber dados do cliente e do servidor (Multiplex)
* Server Push
* Headers são comprimidos
* Gasta menos recursosde rede
* Processo é mais veloz


### gRPC - API "unary"

CLIENT - Request
SERVER - Response
### gRPC - API "Server Streaming"

CLIENT - Request
SERVER - Multi Response

### gRPC - API "Server Streaming"

CLIENT - Multi Request
SERVER - Response

### gRPC - API "Bi directional streaming"

CLIENT - Multi Request 
SERVER - Multi Response

### Rest vs gRPC

* Texto X Protocol Buffers
* Unidirecional X Bidirecional e Assíncrono
* Alta latência X Baixa latência
* Sem contrato (maior chance de erros) X Contrato definido (.proto)
* Sem suporte a streaming (Request / Response) X Suporte a streaming
* Design pré-definido X Design é livre
* Bibliotecas de terceiros X Geração de código

### Minimizar riscos de perda de informações utilizando filas

