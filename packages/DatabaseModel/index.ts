import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { ConnectDB, Database as IDatabase } from "./types";

export default function connectDatabase({
    host,
    database,
    user,
    pool,
}: ConnectDB): Kysely<IDatabase> {
    return new Kysely<IDatabase>({
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

export type Database = IDatabase;
