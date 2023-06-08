import { Request, Response } from "express";
import { IProducto, Producto, } from "../entities/Producto";
import { MysqlDataSource } from "../configs/Db";

const repository = MysqlDataSource.getRepository(Producto);
class ProductoController {
  public async Obtener(req: Request, res: Response) {
    let error = "Hubo un error";
    try {
      const lista = await repository.find();
      res.send(lista);
    } catch (error) {
      console.error(`Error ${new Date().toLocaleString()}`, error);
      res.send(error);
    }
  }
  public async Crear(req: Request, res: Response) {
    let error = "Hubo un error";
    try {
      const users: IProducto = req.body;
      const oUser = new Producto(users);
      await repository.save(oUser);
      error = "Creacion exitosa";
    } catch (error) {
      console.error(`Error ${new Date().toLocaleString()}`, error);
    }
    res.send(error);
  }
}

export default new ProductoController();
