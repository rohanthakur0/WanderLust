const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");




const reviewVController = require("../controllers/reviews.js");









//Reviews
//Post Route

router.post("/", isLoggedIn, validateReview, wrapAsync( reviewVController.createReview)
  );
  
  
  //Delete Route Reviews
  
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewVController.destroyReview)
);

module.exports = router;
  
  
  