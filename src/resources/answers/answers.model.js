import mongoose from 'mongoose'

const answersSchema = new mongoose.Schema(
  {
    age: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 2
    },
    department: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
      trim: true,
      maxlength: 100
    },
    workingYears: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 2
    },
    educationLevel: {
      type: String,
      required: true,
      enum: [
        'elementary',
        'highschool',
        'associate',
        'bachelors',
        'masters',
        'phd'
      ],
      trim: true,
      maxlength: 15
    },
    answers: {
      type: Array,
      required: false,
      trim: true,
      maxlength: 200
    },
    formId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'form',
      required: true
    }
  },
  { timestamps: true }
)

export const Answers = mongoose.model('answers', answersSchema)
