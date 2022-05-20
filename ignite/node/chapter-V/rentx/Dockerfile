# Imagem desejada
FROM node

# Diretorio com informações da criação do container
WORKDIR /usr/app

# O arquivo (package.json) irá para o diretório de atual (/usr/app)
COPY package.json .

# Comando executado pelo docker após ter o package, irá instalar as dependencias
RUN npm install

# Depois de ter baixado as dependencias, irá passar tudo
COPY . .

# Porta utilizada no container
EXPOSE 3333

# Comando usado para rodar a aplicacao
CMD ["npm", "run", "dev"]