import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Bryan',
      sobrenome: 'Santos',
      email: 'sp.bryansantos@gmail.com',
      idade: 20,
      peso: 70,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
