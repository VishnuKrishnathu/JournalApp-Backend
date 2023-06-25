import makeUser from "../entities";
import { userInfo, makeCreateUser } from "./index.d";

export default function makeCheckPassword({ User }: makeCreateUser) {
    return async function checkPassword({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        let user = await User.findOne(
            [`email = ${email}`],
            ["id", "email", "password", "full_name"],
        );

        if (!user) {
            throw new Error("User not found");
        }

        let mod_user = makeUser(user, { skipChecks: true });

        let isMatch = await mod_user.comparePassword(password);
        return isMatch;
    };
}
