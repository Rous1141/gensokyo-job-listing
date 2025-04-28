export interface AccountProps{
    createdAt: Date,
    name: string,
    avatar: string,
    username: string,
    password: string,
    isActive: boolean,
    role: string,
    id: string
}
export interface AccountPropsCreate{
    createdAt: Date,
    name: string,
    avatar: string,
    username: string,
    password: string,
    isActive: true,
    role: "user"|string,
}
