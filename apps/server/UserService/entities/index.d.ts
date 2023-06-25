export type makeUser = {
    id?: string;
    email: string;
    full_name: string;
    password: string;
    created_at?: number;
    modified_at?: number;
    premium?: boolean;
};

export type buildMakeUser = {
    hashPassword: (pass: string) => Promise<string>;
    Id: {
        getId: () => string;
        validate: (id: string) => boolean;
    };
    comparePassword: (pass: string, hashed_pass: string) => Promise<boolean>;
};
