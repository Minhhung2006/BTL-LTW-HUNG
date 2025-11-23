CREATE TABLE budgets (
    budget_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    limit_amount NUMERIC(15, 0) NOT NULL,
    budget_month DATE NOT NULL,
    
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    CONSTRAINT check_limit_amount
        CHECK (limit_amount > 0),

    CONSTRAINT check_first_day_of_month
        CHECK (EXTRACT(DAY FROM budget_month) = 1),

    CONSTRAINT user_per_month UNIQUE(user_id, budget_month)
);
