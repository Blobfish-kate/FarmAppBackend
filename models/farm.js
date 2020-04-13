const mongoose = require("mongoose")

const farmSchema = new mongoose.Schema({
	farmName: { type: String },
	farmAddress: { type: Object },
	farmDescription: { type: String },
	farmCrops: { type: Array },
	farmWorkType: { type: Array },
	farmAvailability: { type: Array },
	farmImage: {
		id: {
			type: mongoose.Schema.Types.ObjectID,
			ref: "Image"
		}
	}
})

module.exports = mongoose.model("Farm", farmSchema)