import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { knex } from '../database'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/create', async (request, reply) => {
    const createUserBody = z.object({
      username: z.string(),
      password: z.string(),
    })

    const { username, password } = createUserBody.parse(request.body)

    await knex('users').insert({
      username,
      password,
      avatarUrl: 'https://source.unsplash.com/collection/9647150/500x500',
    })

    return reply.status(201).send()
  })
}
