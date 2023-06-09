import makeUser from "../entities";
import { userInfo, makeCreateUser } from "./index.d";

export default function makeCreateUser({ User }: makeCreateUser) {
    return async function createuser(userInfo: userInfo) {
        const user = makeUser(userInfo);

        let exist = await User.findOne(
            [`email = ${userInfo.email}`],
            ["id", "email", "full_name"],
        );

        if (exist) {
            throw new Error("User already exists");
        }

        return await User.insertOne(
            {
                id: user.getId(),
                email: user.getEmail(),
                password: await user.hashPassword(),
                full_name: user.getFullName(),
                modified_at: user.getModifiedDate(),
                created_at: user.getCreatedDate(),
                premium: user.isPremium(),
            },
            ["email", "full_name", "id"],
        );
    };
}
