import { createUser } from "../use-cases";

export type makePostUser = {
    createUser: typeof createUser;
    handleError: (
        err: any,
        status?: number,
    ) => {
        status: number;
        body: any;
    };
};
