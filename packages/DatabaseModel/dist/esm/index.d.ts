import { Kysely } from "kysely";
import { ConnectDB, Database as IDatabase } from "./types";
export default function connectDatabase({ host, database, user, pool, password }: ConnectDB): Kysely<IDatabase>;
export type Database = IDatabase;
