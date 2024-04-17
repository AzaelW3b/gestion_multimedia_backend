import mongoose from "mongoose"

const themeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    urlContent: {
        type: String,
    },
    contentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ContentCategory"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })
export default mongoose.model('Theme', themeSchema)