import mongoose from 'mongoose'

export const answersCalculation = model => async (req, res) => {
  try {
    //get formId from params
    const formId = mongoose.Types.ObjectId(req.params.formId)

    //construct empty match query
    var match = {}

    //check whether filters send as parameters
    if (Object.keys(req.query).length !== 0) {
      //add $and condition to the match query
      match = {
        $and: []
      }

      //check if age and working year sent as query parameters if so assign them to variables and delete max for iterating once on the foreach loop
      if (req.query?.minAge && req.query?.maxAge) {
        var minAge = parseInt(req.query.minAge)
        var MaxAge = parseInt(req.query.maxAge)
        delete req.query.maxAge
      }

      if (req.query?.workingYearMin && req.query?.workingYearMax) {
        var workingYearMin = req.query.workingYearMin
        var workingYearMax = req.query.workingYearMax
        delete req.query.workingYearMax
      }

      //convert query parameters to array eg: ['age', 16],['deparment', 'IT']
      var array = Object.entries(req.query)

      //foreach query parameter construct an equal or gt lt expression then push it to $and array in match object
      array.forEach(x => {
        if (x[0] === 'minAge') {
          var z = { age: { $gt: minAge, $lt: MaxAge } }
        } else if (x[0] === 'workingYearMin') {
          var z = { workingYear: { $gt: workingYearMin, $lt: workingYearMax } }
        } else var z = { [x[0]]: { $eq: x[1] } }
        match.$and.push(z)
      })
    }

    // define other filters for calculating average scores
    var unwind = '$answers'
    var group = {
      _id: '$answers.SubCategory',
      CalculatedWeight: { $avg: '$answers.CalculatedWeight' },
      formId: { $first: formId }
    }
    var project = { _id: 1, CalculatedWeight: 1, formId: 1 }
    var out = 'results'

    console.log(match)

    //push all aggregation parameters to model.aggregate
    const docs = await model
      .aggregate()
      .match(match)
      .unwind(unwind)
      .group(group)
      .project(project)
      //.out(out)
      // .lean()
      .exec()
    console.log(docs)
    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const AnswersCalculate = model => ({
  answersCalculation: answersCalculation(model)
})
