/* Importação a biblioteca do mysql2/promise para estabelecer
 a conexão com o banco de dados */
import mysql from "mysql2/promise";
/* A contante pool é uma conexão com o banco de dado. Com ela
iremos criar uma conexão com o mysql passando alguns parâmetros, tais como:
- Host (local onde está o banco de dados)
- User (Usuário do banco de dados)
- Password (Senha para acesso ao banco de dados)
- Database (Nome do banco de dados)
- Port(Port de comunicação do banco de dados) */
 const pool  = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dbts",
    port:3306
 });

export default pool; 