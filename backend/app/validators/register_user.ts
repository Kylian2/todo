import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim().minLength(2).maxLength(255),
    lastname: vine.string().trim().minLength(2).maxLength(255),
    email: vine.string().email().maxLength(250),
    password: vine.string().minLength(3).maxLength(30),
  })
)
