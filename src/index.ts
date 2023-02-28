import express, { Express, Request, Response } from "express";

require("dotenv").config();

import cors from "cors";
import { sequelize } from "./models";

const app: Express = express();

// Accessible to any
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Invalid route
app.use(async (req: Request, res: Response) => {
  res.status(404).send("Invalid Route");
});

sequelize.authenticate().then(async () => {
  try {
    await sequelize.sync({ force: true }).then(() => {
      console.log("Connected to db");
      app.listen(PORT, () => {
        console.log(
          `⚡️[server]: Server is running at http://localhost:${PORT}`
        );
      });
    });
  } catch (error) {
    console.log("error", error);
  }
});
