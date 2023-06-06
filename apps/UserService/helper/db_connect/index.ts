import connectDB from "@journal-app/databasemodel";

const db = connectDB({
    host: "",
    database: "",
    user: "",
    pool: 20
})

export default db;