import { HttpRequest } from "index.d";
import { makePostUser } from "./index.d";

type postUserBody = {
    email: string;
    password: string;
    full_name: string;
};
export default function makePostUser({
    createUser,
    handleError,
}: makePostUser) {
    return async function postUser(httpRequest: HttpRequest<postUserBody>) {
        try {
            let user = await createUser(httpRequest.body);

            return {
                status: 201,
                body: {
                    message: "User Created Successfuly",
                    user,
                },
            };
        } catch (err) {
            return handleError(err);
        }
    };
}
