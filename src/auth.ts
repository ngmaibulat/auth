#!/usr/bin/env node --no-warnings

import { db } from "./db.js";
import { help } from "./utils.js";
import { info, ping, list, add } from "./dbutils.js";
import { init } from "./schema.js";

// console.log(process.env.MSG);

if (process.argv.length < 3) {
    console.log("example: auth <cmd>");
    help();
    process.exit(1);
}

const cmd = process.argv[2];

switch (cmd) {
    case "help":
        help();
        break;

    case "info":
        await info();
        break;

    case "ping":
        await ping();
        break;

    case "init":
        await init();
        break;

    case "add":
        await add();
        break;

    case "list":
        await list();
        break;

    default:
        help();
}

db.destroy();

/**
 * commands:
 *
 * .help: show available commands
 * .info: show database connection details
 * .ping: check db connection
 * .init: create schema
 * add: create user
 * delete: delete user
 * chpass: change password for user
 * check: check user/pass combination
 */
