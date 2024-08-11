const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
  title: {
    type:String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://unsplash.com/photos/the-sun-is-setting-over-a-valley-with-mountains-in-the-background-8KdZlqwRnYg",
    set: (v) => v === ""? "https://unsplash.com/photos/the-sun-is-setting-over-a-valley-with-mountains-in-the-background-8KdZlqwRnYg" :v,
  },
  price: String,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;