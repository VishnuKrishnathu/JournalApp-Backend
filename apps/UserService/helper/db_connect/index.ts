import connectDB from "@journal-app/databasemodel";

const db = connectDB({
    host: "localhost",
    database: "journal_db",
    password: "journal_app",
    user: "journal_app",
    pool: 20,
});

export default db;
