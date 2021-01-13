import { readFile, writeFile } from "fs/promises";
import { INewUser, IUser } from "../@types/database";
import connection from "../database/connection";

class UserRepository {
  private readonly _connection: string;

  constructor() {
    this._connection = connection;
  }

  private async _currentFile(): Promise<IUser[]> {
    return JSON.parse(
      await readFile(this._connection, {
        encoding: "utf-8",
      })
    );
  }

  private _generateId() {
    return Math.floor(
      Math.random() * 100 +
        Date.now() +
        (Math.random() * 1142223.15 + Math.random() * 63434322.24)
    );
  }

  public async list() {
    const users = await this._currentFile();

    return users;
  }

  public async create(userData: INewUser) {
    const users = await this._currentFile();
    const  id = this._generateId() 
    const userWithId: IUser = { ...userData, id };
    users.push(userWithId);
    await writeFile(this._connection, JSON.stringify(users));

    return userWithId;
  }

  public async delete(userId: number) {
    const users = await this._currentFile();
    const selectedUserIndex = users.findIndex((user) => user.id === userId);
    const selectedUser = users[selectedUserIndex];

    const updatedUsers = users.filter((user) => user.id !== userId);

    await writeFile(this._connection, JSON.stringify(updatedUsers));

    return selectedUser;
  }
}

export default new UserRepository();
