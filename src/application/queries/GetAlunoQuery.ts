import { connection } from '../../infrastructure/database/connection';
import { Aluno } from '../../domain/entities/Aluno';
 
export async function getAlunos(): Promise<Aluno[]> {
  const [rows] = await connection.execute('SELECT * FROM alunos');
  return rows as Aluno[];
}