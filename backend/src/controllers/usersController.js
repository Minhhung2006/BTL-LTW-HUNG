import { UserModel } from "../models/userModel.js";

export const UserController = {
    getAll: async (req, res) => {
        const users = await UserModel.getAll();
        res.json(users);
    },

    create: async (req, res) => {
        const { email, full_name, password } = req.body;
        const user = await UserModel.create(email, full_name, password);
        res.json(user);
    }
};
