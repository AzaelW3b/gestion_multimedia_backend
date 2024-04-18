import mongoose from "mongoose"

const contentCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contentTypePermissions: {
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
        type: String,
    }

}, { timestamps: true })

export default mongoose.model('ContentCategory', contentCategorySchema)