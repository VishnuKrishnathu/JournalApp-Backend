export default interface User {
    id: string;
    full_name: string;
    email: string;
    password: string;
    premium?: boolean;
    created_at: number;
    modified_at: number;
}
