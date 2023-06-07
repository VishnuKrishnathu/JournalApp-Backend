import makePostUser from "./post-user";
import handleError from "../helper/handle-error";
import { createUser } from "../use-cases";

const postUser = makePostUser({ createUser, handleError });

export default Object.freeze({
    postUser,
});

export { postUser };
