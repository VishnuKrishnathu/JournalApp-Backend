import { makeUser, buildMakeUser } from "./index.d";

export default function buildMakeUser({
    hashPassword,
    Id,
    comparePassword,
}: buildMakeUser) {
    return function makeUser(
        user: makeUser,
        options = {
            skipChecks: false,
        },
    ) {
        let { skipChecks } = options;
        let default_user = {
            id: Id.getId(),
            email: "",
            full_name: "",
            password: "",
            created_at: Date.now(),
            premium: false,
            modified_at: Date.now(),
        };
        let {
            id,
            email,
            full_name,
            password,
            created_at,
            premium,
            modified_at,
        } = { ...default_user, ...user };

        let email_addr = "";
        let name = "";
        let premium_user = premium;
        if (!skipChecks) {
            let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            email_addr = email.toLowerCase().trim();
            if (!email_regex.test(email_addr)) {
                throw new Error("Email address is invalid");
            }
            if (email_addr.length >= 50) {
                throw new Error(
                    "Email address cannot have more than 50 characters",
                );
            }
            if (!Id.validate(id)) {
                throw new Error('Invalid "id"');
            }

            name = full_name.trim();
            if (name === "" || name.length <= 2 || name.length >= 50) {
                throw new Error(
                    'Invalid "full_name". It must atleash have more than 2 characters and less than 50',
                );
            }

            /**
             * REF: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a#answer-19605207
             */

            let password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
            if (!password_regex.test(password)) {
                throw new Error("Invalid password format");
            }
            if (password.length > 30) {
                throw new Error("password cannot be more than 30 characters");
            }
        }

        return Object.freeze({
            getId: () => id,
            getEmail: () => (!skipChecks ? email_addr : email),
            hashPassword: async () => await hashPassword(password),
            getPassword: () => password,
            getFullName: () => (!skipChecks ? name: full_name),
            getCreatedDate: () => created_at,
            getModifiedDate: () => Date.now(),
            lastModifiedAt: () => modified_at,
            activatePremium: () => (premium_user = true),
            disablePremium: () => (premium_user = false),
            isPremium: () => premium_user,
            comparePassword: async (unhashed_password: string) => {
                return await comparePassword(unhashed_password, password);
            },
        });
    };
}
