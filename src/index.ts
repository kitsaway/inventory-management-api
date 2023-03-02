import express, { Express, Request, Response } from "express";

require("dotenv").config();

import cors from "cors";
import { sequelize } from "./db/config";
import routes from "./api/routes";
import { createSeeds } from "./db/seeders/index";

const app: Express = express();

// Accessible to any
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// Routes
app.use("/inventories", routes);

// Invalid route
app.use(async (req: Request, res: Response) => {
  res.status(404).send("Invalid Route");
});

const seed = process.argv[2];

console.log("seed", seed);
if (seed) {
  sequelize
    .sync({ force: true })
    .then(() => {
      createSeeds();
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
