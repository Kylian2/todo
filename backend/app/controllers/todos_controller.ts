import Todo from '#models/todo'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class TodosController {
  async index({}: HttpContext) {
    const todo = await Todo.all()
    return todo
  }

  async create({}: HttpContext) {}

  async store({ request }: HttpContext) {
    const todo = new Todo()

    todo.merge(request.body())
    console.log(todo)

    await todo.save()
    return todo
  }

  async show({ params }: HttpContext) {
    const todo = await Todo.find(params.id)
    return todo
  }

  async edit({}: HttpContext) {}

  async update({ params: { id }, request }: HttpContext) {
    const todo = await Todo.findOrFail(id)
    const data = request.body()
    const date = DateTime.local()
    todo.merge({
      ...data,
      updatedAt: date,
    })
    todo.save()
    return todo
  }

  async destroy({ params }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    todo.delete()
  }
}
