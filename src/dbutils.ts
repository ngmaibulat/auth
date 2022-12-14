import { db } from "./db.js";
import { dbinfo } from "./db.js";
import { schemaCreated } from "./schema.js";

import { User } from "./types.js";

export async function ping() {
    console.log("Testing db connection...");
    try {
        await db.raw("SELECT 1");
        console.log("OK");
    } catch (e) {
        const err = e as Error;
        console.error("Cannot access the database");
        console.error(err.message);
    }
}

export function info() {
    console.log("");
    console.log(dbinfo);
}

export async function list() {
    //ping
    //check schema
    const schema = await schemaCreated();

    if (!schema) {
        console.error("schema has not been created");
        console.log("run: auth init");
        return;
    }

    const data = await db<User>("users").select("email");

    if (!data.length) {
        console.log("No records found");
    } else {
        console.log(data);
    }
}

export function add() {
    console.log("");
    console.log(dbinfo);
}
