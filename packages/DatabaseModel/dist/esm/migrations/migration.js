export async function up(db) {
    await db.schema
        .createTable("user")
        .addColumn("id", "varchar(36)", col => col.primaryKey())
        .addColumn("full_name", "varchar(50)", col => col.notNull())
        .addColumn("email", "varchar(50)", col => col.notNull().unique())
        .addColumn("premium", "boolean", col => col.defaultTo(false))
        .addColumn("password", "varchar(200)", col => col.notNull())
        .addColumn("modified_at", "bigint", col => col.notNull())
        .addColumn("created_at", "bigint", col => col.notNull())
        .execute();
}
export async function down(db) {
    await db.schema.dropTable("user");
}