#!/usr/bin/env node --no-warnings

import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MSG);

/**
 * commands:
 *
 * help: show available commands
 * info: show database connection details
 * ping: check db connection
 * init: create schema
 * add: create user
 * delete: delete user
 * chpass: change password for user
 * check: check user/pass combination
 */
