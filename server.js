// import du package http de Node
const http = require('http');

// création du serveur à partir du package http. On peut lui envoyer des requêtes
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur');
});

// on écoute le serveur usr port 3000, ou VarEnv si port n'est pas dispo. On attend les requêtes envoyées
server.listen(process.env.PORT || 3000);