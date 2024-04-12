import type { HttpContext } from '@adonisjs/core/http'
import { registerUserValidator } from '#validators/register_user'
import { loginUserValidator } from '#validators/login_user'
import User from '#models/user'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const paylod = await request.validateUsing(registerUserValidator)
    const user = await User.create(paylod)
    return response.status
  }

  async login({ auth, request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)
    return await auth.use('api').login()
  }
}
