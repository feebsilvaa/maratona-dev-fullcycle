FROM node:14.1-alpine

LABEL maintainer="Fernando Barbosa Silva"

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]