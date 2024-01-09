// eslint-disable-next-line
import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    user: {
      id: string
      name: string
      email: string
      avatar: string
      created_at: string
      session_id?: string
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
