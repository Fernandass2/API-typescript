/**
Importar a biblioteca do Row (Linha)Data(dados)(Pacote) guardar todos os dados e retornam da consulta Select */
import { RowDataPacket } from "mysql2";
/* Importar a conexão com o banco de dados para fazer uma consulta nas tabelas do banco*/
import pool from '../database'; 

/** 
A interface faz uma descrição da estrutura de dados da 
tabela Usuario. */
export interface User extends RowDataPacket{
    id: number;
    name: string;
    email: string;
}

/**
 Exportar a funcao getAllUsers(Pegar todos os usuários) do 
 banco de dados. Está função e do tipo ascíncrona e portanto ,
 aguarda um processamento interno para realizar a exportação
 o processamento será feito pela linha do await(aguardar)
 */
export async function getAllUsers(): Promise<User[]> {
    const [rows] = await pool.query<User[]>('SELECT * FROM users',[]);
    return rows;
}