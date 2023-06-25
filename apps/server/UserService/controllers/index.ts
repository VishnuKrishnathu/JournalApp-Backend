import makePostUser from "./post-user";
import makeVerifyUser from "./verify-user";
import handleError from "../helper/handle-error";
import { createUser, checkPassword } from "../use-cases";

const postUser = makePostUser({ createUser, handleError });
const verifyUser = makeVerifyUser({ checkPassword, handleError });

export default Object.freeze({
    postUser,
    verifyUser
});

export { postUser, verifyUser };
