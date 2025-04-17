import express from 'express';
import alunoRouter from './interfaces/alunoController';
 
const app = express();
app.use(express.json());
 
app.use('/alunos', alunoRouter);
 
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});