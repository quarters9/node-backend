import mongoose, { Schema } from 'mongoose'

const FormQuestionSchema = new Schema({
  questionType: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  attributeGroupOne: {
    type: String,
    required: false,
    trim: true,
    maxlength: 200
  },
  attributeGroupTwo: {
    type: String,
    required: false,
    trim: true,
    maxlength: 200
  },
  label: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  weight: {
    type: Number,
    required: false,
    trim: true,
    maxlength: 200
  },
  validation: {
    type: String,
    required: false,
    trim: true,
    maxlength: 200
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  calculatedWeight: {
    type: String,
    required: false,
    trim: true,
    maxlength: 200
  },
  type: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  options: {
    type: Object,
    required: false,
    trim: true,
    maxlength: 200
  }
})

const formSchema = new mongoose.Schema(
  {
    surveyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    form: [FormQuestionSchema],
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

export const Form = mongoose.model('form', formSchema)
