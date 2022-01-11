const http = require('http');

const app = require('./app');

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

/*const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});*/

app.use((req, res) => {
    res.json({message: 'votre requete a bien éte reçue!'})
});

server.listen(process.env.PORT || 3000);