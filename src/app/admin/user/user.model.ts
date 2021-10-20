export interface User{
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    createdAt: Date,
    active: boolean,
    roles:any[]
}