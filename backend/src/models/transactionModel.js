import { pool } from "../config/db.js";

export const TransactionModel = {
    getByUser: async (user_id) => {
        const result = await pool.query(
            "SELECT * FROM transactions WHERE user_id = $1",
            [user_id]
        );
        return result.rows;
    },

    create: async (user_id, category_id, amount, note, date) => {
        const result = await pool.query(
            `INSERT INTO transactions (user_id, category_id, amount, note, transaction_date)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [user_id, category_id, amount, note, date]
        );
        return result.rows[0];
    }
};
