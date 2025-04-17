import { connection } from '../../infrastructure/database/connection';
import { Aluno } from '../../domain/entities/Aluno';
 
export async function updateAluno(id: number, aluno: Aluno): Promise<void> {
  const sql = `
    UPDATE alunos
    SET nomealuno = ?, cpf = ?, idade = ?, telefone = ?
    WHERE id = ?
  `;
 
  const { nomealuno, cpf, idade, telefone } = aluno;
 
  await connection.execute(sql, [nomealuno, cpf, idade, telefone, id]);
}