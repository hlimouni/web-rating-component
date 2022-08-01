import { useContext } from 'react'
import RatingScale from './RatingScale'
import {ReactComponent as StarIcon} from '../icons/icon-star.svg'
import {AppContext} from '../App'

function Rating() {
  const {setIsSubmit} = useContext(AppContext);
  const {ratingValue} = useContext(AppContext);
  return (
    <div className="rating-card">
        <StarIcon/>
        <h1> How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering! </p>
        <RatingScale/>
        <button onClick={() => setIsSubmit(ratingValue > 0)}>Submit</button>
    </div>
  )
}

export default Rating