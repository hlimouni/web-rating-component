import { createContext, useState } from 'react';
import './App.css';
import Rating from './components/Rating';
// import RatingScale from './components/RatingScale';
import ThankYou from './components/ThankYou';
// import StarLogo from './icons/icon-star.svg'

export const AppContext = createContext(null);

export default function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="App">
      <AppContext.Provider value={{ratingValue, setRatingValue, isSubmit, setIsSubmit}}>
        {ratingValue && isSubmit ? <ThankYou/> : <Rating/>}
      </AppContext.Provider>
    </div>
  );
}

// export default App;
