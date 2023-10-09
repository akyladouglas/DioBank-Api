import { User } from "../interfaces/User";
import { UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuário", () => {
    const name = "John";
    const email = "john@gmail.com";
    //const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser(name, email);
    //expect(mockConsole).toHaveBeenCalledWith("Usuário criado com sucesso!", mockDb);

    const users = userService.getAllUsers();
    expect(users).toHaveLength(1);
    expect(users[0]).toEqual({ name, email });
  });
});
