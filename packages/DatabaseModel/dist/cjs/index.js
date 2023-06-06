"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kysely_1 = require("kysely");
const pg_1 = require("pg");
function connectDatabase({ host, database, user, pool, }) {
    return new kysely_1.Kysely({
        dialect: new kysely_1.PostgresDialect({
            pool: new pg_1.Pool({
                host,
                database,
                user,
                max: pool,
            }),
        }),
    });
}
exports.default = connectDatabase;
