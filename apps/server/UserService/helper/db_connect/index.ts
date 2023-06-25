import connectDB, { Database } from "@journal-app/databasemodel";
import { Kysely } from "kysely";

class DBInstance {
    db: Kysely<Database>;
    constructor({
        host,
        database,
        password,
        user,
        pool,
    }: {
        host: string;
        database: string;
        password: string;
        user: string;
        pool: number;
    }) {
        // @ts-ignore
        if (!this.db) {
            this.db = connectDB({
                host,
                database,
                password,
                user,
                pool,
            });
        } else {
            console.log("Database instance already exists");
        }
    }

    getDbInstance() {
        return this.db;
    }
}

const db = new DBInstance({
    host: "localhost",
    database: "journal_db",
    password: "journal_app",
    user: "journal_app",
    pool: 20,
}).getDbInstance();

export default db;
