import { Router } from 'express'
import controllers from './reports.controllers'
import specs from './reports.specs'

const router = Router()

// /api/category
router.route('/').get(controllers.getMany)

// /api/category/:id
router.route('/:id').get(controllers.getOne)

router.route('/subupsert/:id').put(specs.updateSub)
export default router
