const db_mongoose  = require('./server/db_mongoose');
const routes       = require('./routes/route_server');
const mongoose     = require('mongoose');
var   cookieParser = require('cookie-parser');
var   session      = require('express-session');
const express      = require('express');
const app          = express();
const path         = require('path');
const swaggerUI    = require('swagger-ui-express');
//Execute npm init -y para gerar um pacote e automaticamente e aceitar todos os padrões.

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser()); 
app.use(session({secret:'valdenirziger',
                 name: 'APIRestEasyMonitor',
                 resave: true,
                 saveUninitialized:true, 
                 cookie:{secure: false, maxAge: 30*60*1000}}));// 30 min
const swaggerDocument = require('./swagger.json');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(routes);

mongoose.set('strictQuery', true);
mongoose.connect(db_mongoose.connection).then(()=>{
    console.log('Conectado em: mongodb+srv://valdenir:1234@clusterutfpr.2k7tc1v.mongodb.net/');
}).catch((error) =>{
    console.error('Erro ao conectar ao banco de dados:', error);
});

app.use(express.urlencoded({extended:true}))

app.listen(8080,function(){
    console.log("Servidor executando no link http://localhost:8080/api");
    console.log("acesse a documentação da API-EasyMonitor no link http://localhost:8080/api-docs");
});