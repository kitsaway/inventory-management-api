import { Request, Response } from "express";
import { InventoryInput } from "../../db/models/inventory.model";
import * as service from "../services/inventory.service";

type ReqQuery = { filter: string; page: string };

export const create = async (req: Request, res: Response) => {
  const payload: InventoryInput = req.body;
  const result = await service.create(payload);
  return res.status(200).send({ data: result });
};

export const deleteById = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const result = await service.deleteById(id);
  return res.status(204).send({
    success: result,
  });
};

export const getAll = async (req: Request, res: Response) => {
  const { filter, page } = req.query as ReqQuery;

  const size: number = 20;
  const pageN = Number.parseInt(page);
  let pageNum = 0;
  if (!Number.isNaN(pageN) && pageN > 0) {
    pageNum = pageN;
  }

  let results = await service.getAll(size, pageNum, filter);

  return res.status(200).send({
    data: results.rows,
    count: results.count,
    pages: results.count / size,
  });
};
