import { User } from "../interfaces/User";

const db: any = [];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    //console.log("Usuário criado com sucesso!", this.db);
    console.log("Usuário criado com sucesso!");
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    if (!this.db.includes(user)) throw new Error("Usuário não encontrado");
    this.db.splice(this.db.indexOf(user), 1);
  };
}
