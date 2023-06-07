import User from "../models/user.model";
export interface Database {
    user: User;
}
export interface ConnectDB {
    host: string;
    user: string;
    database: string;
    pool: number;
    password: string;
}
