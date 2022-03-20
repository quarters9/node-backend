import { Router } from 'express'
import controllers from './answers.controllers'
import specs from './answers.specs'

const router = Router()

// /api/item
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

router.route('/evaluate-form/:formId').get(specs.answersCalculation)

export default router
