import { pool } from "../config/db.js";

export const UserModel = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    },

    create: async (email, full_name, hashed_password) => {
        const result = await pool.query(
            `INSERT INTO users (email, full_name, hashed_password)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [email, full_name, hashed_password]
        );
        return result.rows[0];
    }
};
