import z from 'zod'

export const registerSchema = z.object({
    username: z.string({ required_error: 'Se requiere nombre de usuario' }),
    email: z.string({ required_error: 'Se requiere email' }).email({ message: 'Email invalido' }),
    password: z.string({ required_error: 'Se requiere contraceña' }).min(6, { message: 'La contraceña debe tener almenos 6 caracteres' }),
})

export const loginSchema = z.object({
    email: z.string({ required_error: 'Se requiere email' }).email({ message: 'Se requiere email' }),
    password: z.string({ required_error: 'Se requiere contraceña' }).min(6, { message: 'La contraceña debe tener almenos 6 caracteres' }),
})