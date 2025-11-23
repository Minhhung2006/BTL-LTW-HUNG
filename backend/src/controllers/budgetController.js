import { BudgetModel } from "../models/budgetModel.js";

export const BudgetController = {
    getByUser: async (req, res) => {
        const user_id = req.params.user_id;
        res.json(await BudgetModel.getByUser(user_id));
    },

    create: async (req, res) => {
        const { user_id, limit_amount, budget_month } = req.body;
        res.json(await BudgetModel.create(user_id, limit_amount, budget_month));
    }
};
