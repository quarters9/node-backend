import { Router } from 'express'
import controllers from './category.controllers'
import specs from './category.specs'

const router = Router()

// /api/category
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/category/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

router.route('/subupsert/:id').put(specs.updateSub)
export default router
