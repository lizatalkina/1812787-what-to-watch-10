import React from 'react';
import { useState } from 'react';

const AddReviewForm = (): JSX.Element => {
  const RATING_LENGTH = 10;
  const [userReview, setUserReview] = useState({
    rating: 8,
    reviewText: '',
  });

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {[...Array(RATING_LENGTH)].map((_, i) =>
            (
              <React.Fragment key={`star-${RATING_LENGTH - i}`}>
                <input className="rating__input" id={`star-${RATING_LENGTH - i}`} type="radio" name="rating" value={RATING_LENGTH - i}
                  checked={userReview.rating === (RATING_LENGTH - i)}
                  onChange={(event) => {
                    const value = Number(event.currentTarget.value);
                    setUserReview({...userReview, rating: value});
                  }}
                />
                <label className="rating__label" htmlFor={`star-${RATING_LENGTH - i}`}>Rating {RATING_LENGTH - i}</label>
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
