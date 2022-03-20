import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
  {
    categoryType: {
      type: String,
      enum: ['main', 'sub'],
      required: true,
      trim: true,
      maxlength: 100
    },
    categoryName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },
    subCategories: {
      type: Array,
      required: false,
      trim: true,
      maxlength: 200
    },
    categoryWeight: {
      type: Number,
      required: false,
      trim: true
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

export const Category = mongoose.model('category', categorySchema)
