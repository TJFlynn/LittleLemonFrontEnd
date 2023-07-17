import { useReducer, createContext } from "react";
import BookingForm from "../components/BookingForm";

const updateTimes = (state, action) => {
  const date = new Date(action.date);
  console.log(date);
  const data = fetchAPI(date);
  return data;
}

const initializeTimes = () => {
  const data = fetchAPI(new Date());
  return data;
}

export const BookingContext = createContext(null);
export const BookingDispatchContext = createContext(null);

const Book = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return ( 
  <>
  <BookingContext.Provider value={availableTimes}>
    <BookingDispatchContext.Provider value={dispatch}>
      <BookingForm  />
    </BookingDispatchContext.Provider>
  </BookingContext.Provider>
  </>
);
}

export default Book;


const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

