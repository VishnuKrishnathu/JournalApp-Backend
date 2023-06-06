import { makeUser, buildMakeUser } from "./index.d";

export default function buildMakeUser({ hashPassword, Id }: buildMakeUser) {
    return function makeUser({
        id = Id.getId(),
        email,
        full_name,
        password,
        created_at = Date.now(),
        premium = false,
        modified_at,
    }: makeUser) {
        let email_regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let email_addr = email.toLowerCase();
        if (!email_regex.test(email_addr)) {
            throw new Error("Email address is invalid");
        }

        if (!Id.validate(id)) {
            throw new Error('Invalid "id"');
        }

        let name = full_name.trim();
        if (name === "" || name.length <= 2) {
            throw new Error(
                'Invalid "full_name". It must atleash have more than 2 characters',
            );
        }

        let premium_user = premium;

        /**
         * REF: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a#answer-19605207
         */

        let password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        if (!password_regex.test(password)) {
            throw new Error("Invalid password format");
        }

        return Object.freeze({
            getId: () => id,
            getEmail: () => email_addr,
            hashPassword: async () => await hashPassword(password),
            getPassword: () => password,
            getFullName: () => name,
            getCreatedDate: () => created_at,
            getModifiedDate: () => Date.now(),
            lastModifiedAt: () => modified_at,
            activatePremium: () => (premium_user = true),
            disablePremium: () => (premium_user = false),
            isPremium: () => premium_user,
        });
    };
}
