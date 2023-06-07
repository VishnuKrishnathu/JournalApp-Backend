import { v4 as uuidV4, validate } from "uuid";

const Id = {
    getId: () => uuidV4(),
    validate: (id: string) => validate(id),
};

export default Id;
