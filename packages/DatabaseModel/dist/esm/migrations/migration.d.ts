import { Kysely } from "kysely";
import { Database } from "../types";
export declare function up(db: Kysely<Database>): Promise<void>;
export declare function down(db: Kysely<any>): Promise<void>;
