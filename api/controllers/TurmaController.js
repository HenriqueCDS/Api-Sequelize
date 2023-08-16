// controllers/TurmaController.js
database = require('../models');
class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    static async pegaUmaTurma(req, res) {
      const { id } = req.params
      try {
        const umaTurmas = await database.Turmas.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(umaTurmas)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaTurma(req, res) {
      const novaTurmas = req.body
      try {
        const novaTurmasCriada = await database.Turmas.create(novaTurmas)
        return res.status(200).json(novaTurmasCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaTurma(req, res) {
      const { id } = req.params
      const novasInfos = req.body
      try {
        await database.Turmas.update(novasInfos, { where: { id: Number(id) }})
        const TurmasAtualizada = await database.Turmas.findOne( { where: { id: Number(id) }})
        return res.status(200).json(TurmasAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    //deletar um registro
    static async apagaTurma(req, res) {
      const { id } = req.params
      try {
        await database.Turmas.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
  
}
module.exports = TurmaController;