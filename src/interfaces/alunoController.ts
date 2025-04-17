import express from 'express';
import { createAluno } from '../application/commands/CreateAlunoCommand';
import { getAlunos } from '../application/queries/GetAlunoQuery';
import { updateAluno } from '../application/commands/UpdateAlunoCommand';
import { deleteAluno } from '../application/commands/DeleteAlunoCommand';
// importe update/delete quando criar
 
const router = express.Router();
 
router.get('/', async (req, res) => {
  const alunos = await getAlunos();
  res.json(alunos);
});
 
router.post('/', async (req, res) => {
  await createAluno(req.body);
  res.status(201).send('Aluno criado');
});

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await updateAluno(id, req.body);
    res.send('Aluno atualizado');
  });
   
  router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await deleteAluno(id);
    res.send('Aluno deletado');
  });
 
export default router;