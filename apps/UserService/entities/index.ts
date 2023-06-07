import bcrypt from "bcrypt";
import buildMakeUser from "./make-user";
import Id from "../helper/Id";

const makeUser = buildMakeUser({
    hashPassword: async (password: string) => {
        let hashed_pass = await bcrypt.hash(password, 12);
        return hashed_pass;
    },
    Id: Id,
});
export default makeUser;
