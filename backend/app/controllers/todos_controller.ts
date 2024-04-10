import Todo from '#models/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  async index({}: HttpContext) {
    const todo = await Todo.all()
    return todo
  }

  async create({}: HttpContext) {}

  async store({}: HttpContext) {}

  async show({ params }: HttpContext) {
    const todo = await Todo.find(params.id)
    return todo
  }

  async edit({}: HttpContext) {}

  async update({}: HttpContext) {}

  async destroy({}: HttpContext) {}
}
