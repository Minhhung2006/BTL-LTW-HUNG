import { pool } from "../config/db.js";

export const BudgetModel = {
    getByUser: async (user_id) => {
        const result = await pool.query(
            "SELECT * FROM budgets WHERE user_id = $1",
            [user_id]
        );
        return result.rows;
    },

    create: async (user_id, limit_amount, budget_month) => {
        const result = await pool.query(
            `INSERT INTO budgets (user_id, limit_amount, budget_month)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [user_id, limit_amount, budget_month]
        );
        return result.rows[0];
    }
};

