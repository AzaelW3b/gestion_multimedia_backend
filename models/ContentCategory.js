import mongoose from "mongoose"

const contentCategorySchema = mongoose.Schema({
    nameCategory: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

export default mongoose.model('ContentCategory', contentCategorySchema)