import React, { useContext } from 'react'
import {AppContext} from '../App'

function GradeButton({number}) {
  const {setRatingValue} = useContext(AppContext);
  return (
      <button className='grade-button'
      onClick={() => setRatingValue(number)}>
          {number}
      </button>
  );
}

export default GradeButton