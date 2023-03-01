"use strict";

import { Sequelize } from "sequelize-typescript";
import Inventory from "../models/inventory.model";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

export const sequelize = new Sequelize({
  database: config.database,
  username: config.username,
  password: config.password,
  dialect: config.dialect,
});

sequelize.addModels([Inventory]);
