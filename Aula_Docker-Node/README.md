# Aula da RocketSeat sobre Node.js e Docker:
[link da aula](https://www.youtube.com/watch?v=AVNADGzXrrQ&t=896s)

# Comandos usados (terminal):
```
// Antes do docker-compose:
docker build -t rocketseat/dockernode . 
docker run -p 3000:3000 -d rocketseat/dockernode

// Depois do docker-compose:
docker ps // para pegar o id do container
docker stop cad5b8e15b66 // para encerrar o servidor, o id depois do stop precisa ser o pego no docker ps
docker rm cad5b8e15b66 // para remover o servidor, o id depois do stop precisa ser o pego no docker ps
docker-compose up
```