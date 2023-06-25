import makeCreateUser from "./create-user";
import makeCheckPassword from "./check-password";
import { User } from "../data-access";

const createUser = makeCreateUser({ User });
const checkPassword = makeCheckPassword({ User });

export default Object.freeze({
    createUser,
    checkPassword,
});

export { createUser, checkPassword };
