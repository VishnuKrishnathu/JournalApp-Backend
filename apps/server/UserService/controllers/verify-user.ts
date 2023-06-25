import { HttpRequest } from "index";
import { handleError } from "./index.d";

interface verifyUserBody {
    email: string;
    password: string;
}

interface IMakeVerifyUser {
    checkPassword: (body: verifyUserBody) => Promise<boolean>;
    handleError: handleError;
}

const makeVerifyUser = ({ checkPassword, handleError }: IMakeVerifyUser) => {
    return async function verifyUser(httpRequest: HttpRequest<verifyUserBody>) {
        try {
            const isVerified = await checkPassword(httpRequest.body);

            if (!isVerified) {
                try {
                    throw new Error("User not verified");
                } catch (err) {
                    return handleError(err, 401);
                }
            }
            return {
                status: 200,
                body: {
                    message: "User Verified Successfuly",
                },
            };
        } catch (err) {
            return handleError(err, 422);
        }
    };
};

export default makeVerifyUser;
