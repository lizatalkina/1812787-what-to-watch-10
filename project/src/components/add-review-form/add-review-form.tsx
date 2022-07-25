import React from 'react';
import { useState } from 'react';

const AddReviewForm = (): JSX.Element => {
  const ratingLength = 10;
  const [userReview, setUserReview] = useState({
    rating: 8,
    reviewText: '',
  });

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {[...Array(ratingLength)].map((_, i) =>
            (
              <React.Fragment key={`star-${ratingLength - i}`}>
                <input className="rating__input" id={`star-${ratingLength - i}`} type="radio" name="rating" value={ratingLength - i}
                  checked={userReview.rating === (ratingLength - i)}
                  onChange={(event) => {
                    const value = Number(event.currentTarget.value);
                    setUserReview({...userReview, rating: value});
                  }}
                />
                <label className="rating__label" htmlFor={`star-${ratingLength - i}`}>Rating {ratingLength - i}</label>
              </React.Fragment>
            )
          )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={(event) => {
            const value = event.target.value;
            setUserReview({...userReview, reviewText: value});
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default AddReviewForm;
