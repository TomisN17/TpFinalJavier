import z from 'zod'

export const createPublicacionSchema = z.object({
    title: z.string({ required_error: 'Se requiere un titulo' }),
    description: z.string({ required_error: 'La decripcion debe ser un string' }),
    date: z.string().datetime().optional()
})

