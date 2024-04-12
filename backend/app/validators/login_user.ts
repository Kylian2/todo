import vine from '@vinejs/vine'

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().maxLength(250),
    password: vine.string().minLength(3).maxLength(30),
  })
)
