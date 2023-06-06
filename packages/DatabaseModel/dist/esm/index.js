import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
export default function connectDatabase({ host, database, user, pool, }) {
    return new Kysely({
        dialect: new PostgresDialect({
            pool: new Pool({
                host,
                database,
                user,
                max: pool,
            }),
        }),
    });
}
