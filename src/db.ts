import knexpkg from "knex";
import dotenv from "dotenv";

dotenv.config();

export const dbinfo = {
    driver: process.env.AUTH_DB_DRIVER,
    host: process.env.AUTH_DB_HOST,
    port: parseInt(process.env.AUTH_DB_PORT || "3306"),
    name: process.env.AUTH_DB_NAME,
    user: process.env.AUTH_DB_USER,
    pass: process.env.AUTH_DB_PASS,
};

export const db = knexpkg.knex({
    client: dbinfo.driver,
    connection: {
        host: dbinfo.host,
        port: dbinfo.port,
        user: dbinfo.user,
        password: dbinfo.pass,
        database: dbinfo.name,
    },
});
