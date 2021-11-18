import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  /**
   * Código abaixo é uma forma melhor e mais organizada de fazer:
   * category.name = name
   * category.description = description
   * category.created_at = new Date()
   */

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
