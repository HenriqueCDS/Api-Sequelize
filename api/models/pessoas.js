'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type:DataTypes.STRING,
      validate:{
        funcaoValiadadora: function(dado){
          if(dado.length < 3) throw Error('o campo deve ter mais do 3 caracteres');
        }
      }
      
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'dado do tipo email invalidos'
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    paranoid: true,
    defaultScope:{ 
      where:{ ativo:true } }
   ,
   scopes: {
    todos:{ where:{}  },
    //etc:{ where:{}  }
   }
  }); 
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: {status: 'confirmado'},
      as:'AulasMatriculadas'
    })
  };
  return Pessoas;
};