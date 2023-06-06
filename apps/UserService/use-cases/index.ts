import makeCreateUser from "./create-user";
import { User } from "data-access";

const createUser = makeCreateUser({ User });

export default Object.freeze({
    createUser,
});

export { createUser };
