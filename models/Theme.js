import mongoose from "mongoose"

const themeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ContentCategory"
    }

}, { timestamps: true })

export default mongoose.model('Theme', themeSchema)