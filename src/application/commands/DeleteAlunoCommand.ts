import { connection } from '../../infrastructure/database/connection';
 
export async function deleteAluno(id: number): Promise<void> {
  const sql = 'DELETE FROM alunos WHERE id = ?';
  await connection.execute(sql, [id]);
}