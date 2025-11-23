import { TransactionModel } from "../models/transactionModel.js";

export const TransactionController = {
    getByUser: async (req, res) => {
        const user_id = req.params.user_id;
        res.json(await TransactionModel.getByUser(user_id));
    },

    create: async (req, res) => {
        const { user_id, category_id, amount, note, date } = req.body;
        res.json(await TransactionModel.create(user_id, category_id, amount, note, date));
    }
};
