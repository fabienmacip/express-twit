const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    minlength: [3, "Plus de 2 caractères svp..."],
    maxlength: [140, "Maximum 140 caractères"],
    required: [true, "Champ requis"],
  },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
