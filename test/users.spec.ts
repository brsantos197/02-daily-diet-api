import { afterAll, beforeAll, beforeEach, describe, it } from 'vitest'
import { app } from '../src/app'
import { execSync } from 'node:child_process'

import request from 'supertest'

describe('Users routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })
  it('It should be possible to create a user', async () => {
    await request(app.server)
      .post('/users/create')
      .send({
        username: 'JonhDoe',
        password: '123456',
      })
      .expect(201)
  })

  it.todo(
    'It should be possible to identify the user across requests',
    async () => {
      // Your implementation here
    },
  )

  it.todo('It should be possible to retrieve metrics for a user', async () => {
    // Your implementation here
  })

  it.todo(
    'The user can only view, edit, and delete the meals they created',
    async () => {
      // Your implementation here
    },
  )
})
