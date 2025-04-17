import { connection } from '../../infrastructure/database/connection';
import { Aluno } from '../../domain/entities/Aluno';
 
export async function createAluno(aluno: Aluno): Promise<void> {
  const sql = 'INSERT INTO alunos (nomealuno, cpf, idade, telefone) VALUES (?, ?, ?, ?)';
  const { nomealuno, cpf, idade, telefone } = aluno;
  await connection.execute(sql, [nomealuno, cpf, idade, telefone]);
}