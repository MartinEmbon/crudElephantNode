import {Pool} from "pg"

const connectionString = "postgres://jvqgssaa:bg9woeWe8MFTHM0ZsvNXMwDuZlFFwc7J@kesavan.db.elephantsql.com/jvqgssaa"

const db = new Pool({connectionString})

export default db