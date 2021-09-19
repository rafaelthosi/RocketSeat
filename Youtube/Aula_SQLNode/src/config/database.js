module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'sqlnode',
    define: {
        timestamps: true, //created_at, updated_ at
        underscored: true
    }
}