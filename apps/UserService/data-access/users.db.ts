import db from "../helper/db_connect";
import { ComparisonOperator } from "kysely";
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

    async function findOne(
        conditions: Array<`${keyof InsertUser} ${ComparisonOperator} ${string}`>,
        select: Array<keyof InsertUser> = [],
    ) {
        let query = db.selectFrom("user").select(select);
        conditions.forEach(val => {
            //@ts-ignore
            let cond: [keyof InsertUser, ComparisonOperator, string] =
                val.split(" ");
            if (cond.length > 3) {
                throw new Error("Invalid Condition");
            }

            query = query.where(cond[0], cond[1], cond[2]);
        });
        return await query.executeTakeFirst();
    }

    return Object.freeze({
        insertOne,
        findOne,
    });
}
