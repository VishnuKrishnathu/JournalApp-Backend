import { User } from "data-access";

export type userInfo = {
    email: string;
    full_name: string;
    password: string;
};

export type makeCreateUser = {
    User: typeof User;
};
