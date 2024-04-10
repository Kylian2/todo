import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { TodoFactory } from '../factories/todo_factory.js'

export default class extends BaseSeeder {
  async run() {
    const todo = await TodoFactory.createMany(20)
  }
}
