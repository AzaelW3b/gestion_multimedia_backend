import mongoose from "mongoose"

const contentSchema = mongoose.Schema({
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
    themeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Theme"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    urlVideo: {
        type: String
    },
    urlImage: {
        type: String,
    },
    urlText: {
        type: String
    }

}, { timestamps: true })
export default mongoose.model('Content', contentSchema)