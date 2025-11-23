import { pool } from "../config/db.js";

export const CategoryModel = {
    getByUser: async (user_id) => {
        const result = await pool.query(
            "SELECT * FROM categories WHERE user_id = $1",
            [user_id]
        );
        return result.rows;
    },

    create: async (user_id, name) => {
        const result = await pool.query(
            `INSERT INTO categories (user_id, name)
             VALUES ($1, $2)
             RETURNING *`,
            [user_id, name]
        );
        return result.rows[0];
    }
};
