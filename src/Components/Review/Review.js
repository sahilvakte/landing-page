import React from "react";
import "../Review/Review.css";

const Review = () => {
  return (
    <div className="review-container-grid">
      <div className="containers-for-review-section">
        <div className="review-section-container-one"></div>

        <div className="review-section-container-two">
          <h3>Review</h3>
          <p>
            The line of Women's sprays Cosmetics in 2019 was replenished
            with a new  masterpiece.
          </p>
        </div>

        <div className="review-section-container-three">
          <div className="review-rate-section">
            <div>
              {/* <h1>"</h1> */}
            </div>
            <div class="review-rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
          </div>
          <div>
            <p className="review-para-section">
              The line of Women's sprays Cosmetics in 2019 was replenished with
              a new masterpiece - a body spray based on natural oils. In it the
              floral sound is diluted.
            </p>
          </div>
          <div className="review-user-information">
            <div>
              <img
                className="user-in-review-image"
                src="https://svgsilh.com/svg/1633250.svg"
              />
            </div>
            <div className="user-details-in-review">
              <h4>Miss Carolina</h4>
              <p>Beautisian</p>
            </div>
          </div>
        </div>

        <div className="review-section-container-four">
          <div className="review-rate-section">
            <div>
              {/* <h1>"</h1> */}
            </div>
            <div class="review-rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
          </div>
          <div>
            <p className="review-para-section">
              The line of Women's sprays Cosmetics in 2019 was replenished with
              a new masterpiece - a body spray based on natural oils. In it the
              floral sound is diluted.
            </p>
          </div>
          <div className="review-user-information">
            <div>
              <img
                className="user-in-review-image"
                src="https://svgsilh.com/svg/1633250.svg"
              />
            </div>
            <div className="user-details-in-review">
              <h4>Miss Carolina</h4>
              <p>Beautisian</p>
            </div>
          </div>
        </div>
      
      <div className="review-section-container-five"></div>
    </div>
    </div>
  );
};

export default Review;
