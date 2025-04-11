/**
Importar a biblioteca do Row (Linha)Data(dados)(Pacote) guardar todos os dados e retornam da consulta Select */
/**
O comando ResultSetHeader é utilizado para executar as consultas
de modificação das tabelas: Insert, Update, Delete
 */
import { RowDataPacket , ResultSetHeader } from "mysql2";
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

// Função para criar um novo usuário
/*
Aguarda o usuário ser cadastrado. Portanto, estamos
usando a função cini async ... await 

Para cadastrar um usuário será necessário passar o usuário
por parâmetro e, ele será gerenciado pelo seu id */

export async function createUser(user: Omit<User, 'id'>): Promise<ResultSetHeader> {
    try {
        /**
         Vamos usar o comando insert para cadastrar o usuário
         no banco de dados. Estamos usando também o comando await
         que irá esperar pelo cadastro completo do usuário. Na
         consulta do insert está sendo passada 2 parâmetro com o 
         simbolo de ?. Consultas parametrizadas evitem a injeção
         de sql
         */
     const [result] = await pool.execute<ResultSetHeader>(
     'INSERT INTO users (name, email) VALUES (?, ?)',
     [user.name, user.email]);
     return result;
     } catch (error) {
     console.error('Erro ao criar usuário:', error);
     throw error;
    }
}

// Função para atualizar um usuário existente
export async function updateUser(id: number, user: Omit<User, 'id'>): Promise<ResultSetHeader> {
    try {
     const [result] = await pool.execute<ResultSetHeader>(
     'UPDATE users SET name = ?, email = ? WHERE id = ?',
     [user.name, user.email, id]);
     return result;
     } catch (error) {
     console.error('Erro ao atualizar usuário:', error);
     throw error;
     }
 }

 // Função para deletar um usuário
export async function deleteUser(id: number): Promise<ResultSetHeader> {
     try {
     const [result] = await pool.execute<ResultSetHeader>('DELETE FROM users WHERE id = ?', [id]);
     return result;
     } catch (error) {
     console.error('Erro ao deletar usuário:', error);
     throw error;
    }
}
