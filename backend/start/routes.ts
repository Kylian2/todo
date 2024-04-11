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
router.delete('todo/:id', [Todo, 'destroy'])
