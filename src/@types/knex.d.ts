// eslint-disable-next-line
import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      username: string
      password: string
      avatarUrl?: string
      createdAt: string
    }
    meals: {
      id: string
      name: string
      description: string
      hour: string
      date: string
      inDiet: boolean
    }
  }
}
