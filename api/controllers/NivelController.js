//controllers/NivelController.js
const database = require('../models');
class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    static async pegaUmNivel(req, res) {
      const { id } = req.params
      try {
        const umaNiveis = await database.Niveis.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(umaNiveis)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaNivel(req, res) {
      const novaNiveis = req.body
      try {
        const novaNiveisCriada = await database.Niveis.create(novaNiveis)
        return res.status(200).json(novaNiveisCriada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaNivel(req, res) {
      const { id } = req.params
      const novasInfos = req.body
      try {
        await database.Niveis.update(novasInfos, { where: { id: Number(id) }})
        const NiveisAtualizada = await database.Niveis.findOne( { where: { id: Number(id) }})
        return res.status(200).json(NiveisAtualizada)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    //deletar um registro
    static async apagaNivel(req, res) {
      const { id } = req.params
      try {
        await database.Niveis.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
}
module.exports = NivelController