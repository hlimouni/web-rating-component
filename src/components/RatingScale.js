import React from 'react'
import GradeButton from './GradeButton'

function RatingScale() {
  const ratings = [1, 2, 3, 4, 5];
  return (
    ratings.map(
      (rating, key) => (<GradeButton key={key} number={rating} />)
    )
  );
}

export default RatingScale