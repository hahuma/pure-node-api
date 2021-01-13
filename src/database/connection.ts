import { join } from 'path'

class Database {
    public readonly file: string

    constructor () {
        this.file = join(__dirname, 'database.json')
    }

}

export default new Database().file