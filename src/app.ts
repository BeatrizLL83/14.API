import express from "express";
import debug from 'debug';
export const app = express;
import type { Pool } from "pg";

export const createApp = () => {
    const log = debug(`$env.PROJECT_NAME}: app`);
    log("Starting Express app...");
    const app = express();

    log(pool)

    return app;

}

