const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		yearReleased: {
			type: Number,
			required: true,
		},
		melee: {
			type: Boolean,
			required: true
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('leagueChamps', leagueSchema)
