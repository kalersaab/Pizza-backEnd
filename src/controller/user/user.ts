import { IUserDocument, UserModel } from "../../Model/UserModel/user.model";

export class UserService {
  static async createUser(
    data: Partial<IUserDocument>
  ): Promise<IUserDocument> {
    try {
      const newUser = new UserModel(data);
      return await newUser.save();
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  async getUserById(userId: string): Promise<IUserDocument | null> {
    try {
      return await UserModel.findById(userId).exec();
    } catch (error) {
      throw new Error("Error fetching user");
    }
  }
}
