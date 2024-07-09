import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12718965',
    password: "YB6KxIXdgG",
    database: "sql12718965"
})