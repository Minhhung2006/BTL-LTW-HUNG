import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
    getByUser: async (req, res) => {
        const user_id = req.params.user_id;
        res.json(await CategoryModel.getByUser(user_id));
    },

    create: async (req, res) => {
        const { user_id, name } = req.body;
        res.json(await CategoryModel.create(user_id, name));
    }
};
