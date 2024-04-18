import mongoose from "mongoose"

const themeSchema = mongoose.Schema({
    nameTheme: {
        type: String,
        required: true,
        trim: true
    },
    contentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ContentCategory"
    },
    typePermissions: {
        images: {
            type: Boolean,
            default: false
        },
        videos: {
            type: Boolean,
            default: false
        },
        texts: {
            type: Boolean,
            default: false
        }
    },
    coverImage: {
        type: String
    }

}, { timestamps: true })

export default mongoose.model('Theme', themeSchema)