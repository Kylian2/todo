/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

const Todo = () => import('../app/controllers/todos_controller.js')
router.get('/todo/', [Todo, 'index'])
router.get('todo/:id', [Todo, 'show'])
router.post('todo', [Todo, 'store'])
router.post('todo/edit/:id', [Todo, 'update']) //probleme avec patch
router.post('todo/delete/:id', [Todo, 'destroy'])

const Auth = () => import('../app/controllers/auth_controller.js')

router.post('auth/register', [Auth, 'register'])
router.post('auth/login', [Auth, 'login'])
