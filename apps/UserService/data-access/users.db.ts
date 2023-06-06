import db from "helper/db_connect";
import { InsertUser } from "./index.d";

export default function makeUsersDb() {
    async function insertOne(
        options: InsertUser,
        select: Array<keyof InsertUser> = [],
    ) {
        return await db
            .insertInto("user")
            .values(options)
            .returning(select)
            .executeTakeFirstOrThrow();
    }

    return Object.freeze({
        insertOne,
    });
}
