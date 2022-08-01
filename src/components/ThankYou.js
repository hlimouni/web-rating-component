import React, { useContext } from 'react'
import {ReactComponent as ThanksIcon} from '../icons/illustration-thank-you.svg'
import {AppContext} from '../App'

function ThankYou() {
  const {ratingValue} = useContext(AppContext);
  return (
    <div>
        <ThanksIcon/>
        <div>You selected {ratingValue} out of 5</div>
        <h1>Thank you!</h1>
        <p>  We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
    </div>
  )
}

export default ThankYou