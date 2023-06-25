import bcrypt from "bcrypt";
import buildMakeUser from "./make-user";
import Id from "../helper/Id";


const comparePassword = async (password: string, hashed_password: string) => {
    let isMatch = await bcrypt.compare(password, hashed_password);
    return isMatch;
};

const makeUser = buildMakeUser({
    hashPassword: async (password: string) => {
        let hashed_pass = await bcrypt.hash(password, 12);
        return hashed_pass;
    },
    Id: Id,
    comparePassword: comparePassword,
});

export default makeUser;
