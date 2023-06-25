import { createUser } from "../use-cases";

export type handleError = (
    err: any,
    status?: number,
) => {
    status: number;
    body: any;
};

export type makePostUser = {
    createUser: typeof createUser;
    handleError: handleError
};