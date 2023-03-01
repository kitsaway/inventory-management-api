import { Request, Response } from "express";
import {
  InventoryInput,
  InventoryOutput,
} from "../../db/models/inventory.model";
import * as service from "../services/inventory.service";

export const create = async (req: Request, res: Response) => {
  const payload: InventoryInput = req.body;
  const result = await service.create(payload);
  return res.status(200).send(result);
};

export const deleteById = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const result = await service.deleteById(id);
  return res.status(204).send({
    success: result,
  });
};

export const getAll = async (req: Request, res: Response) => {
  const query = req.query;
  const filter = JSON.stringify(query.filter);
  let results: InventoryOutput[];
  if (filter) {
    results = await service.getAll(JSON.parse(filter));
  } else {
    results = await service.getAll();
  }

  return res.status(200).send(results);
};
