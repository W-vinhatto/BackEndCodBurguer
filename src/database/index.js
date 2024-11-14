// forma para pegar informações da configuração do database e deixa disponivel para toda aplicacao

import { Sequelize } from "sequelize";
//import configDatabase from "../config/database";
import mongoose from "mongoose";

import User from "../app/models/User";
import Products from "../app/models/Products";
import Category from "../app/models/Category";

const models = [User, Products, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:hlqoWkxDeBIXBWavXWkSIcRaVrDkloCd@autorack.proxy.rlwy.net:42445/railway'
    );
    models
      .map((model) => model.init(this.connection))
      // avisando para database se tem relacionamento entre tabelas,caso tenha faz ligação
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:kwXVXuZnSnTCXuXEAFDnCDDFpTeAzwuk@autorack.proxy.rlwy.net:11364'
    );
  }
}

export default new Database();
