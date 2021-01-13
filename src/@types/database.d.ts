export interface IUser {
    id: number
    name: string
}

export type INewUser = Omit<IUser, 'id'>