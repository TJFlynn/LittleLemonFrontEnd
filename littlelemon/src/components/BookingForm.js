import './BookingForm.css';
import React, {useState, useContext} from "react";
import ReservationList from './ReservationList';
import { BookingContext, BookingDispatchContext } from "../pages/Book";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
    const times = useContext(BookingContext);
    const dispatch = useContext(BookingDispatchContext);
    const navigate = useNavigate();
    let booked = false;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const today = year + "-" + month + "-" + day;
    const [inputs, setInputs] = useState({
        date: today,
        time: '',
        guests: 1,
        wheelchair: false,
        outdoor: false,
        occasion: '' });


    const handleChange = (event) => {
      const name = event.target.name;
      if (name === "wheelchair" || name === "outdoor")
      {
        const checked = event.target.checked;
        setInputs(values => ({...values, [name]: checked}))
      }
      else {
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        if (name === "date")
        {
            dispatch({date: value});
        }
      } 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        booked = submitAPI(inputs);
        if (booked) navigate('/confirmed')
      }

    return (
        <div id="book_container">
            <div id="book_col1">
            <h2>Make a Reservation</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" name="date" value={inputs.date} onChange={handleChange} required data-testid="input_date_test" />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" name="time" value={inputs.time} onChange={handleChange} required data-testid="input_time_test">
                    {times.map((t) => (
                        <option key={t}>{`${t}`}</option>))}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" name="guests" min="1" max="10" value={inputs.guests} onChange={handleChange} data-testid="input_guests_test"/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" placeholder='Occasion' value={inputs.occasion} onChange={handleChange}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Engagement">Engagement</option>
                    </select>
                    <label className='checkmark_container' htmlFor='wheelchair'>Wheelchair Accessible
                        <input className='checkmark' type="checkbox" id="wheelchair" name="wheelchair" checked={inputs.wheelchair} onChange={handleChange}/>
                    </label>
                    <label className='checkmark_container' htmlFor='wheelchair'>Outdoor dinning
                        <input className='checkmark' type="checkbox" id="outdoor" name="outdoor" checked={inputs.outdoor} onChange={handleChange}/>
                    </label>
                    <input type="submit" className='submitButton' value="Reserve Table" aria-label="On Click"/>
                </form> 
            </div>            
            <div id="book_col2">
                <div id="Current">
                    <h2 data-testid="current_res_test">Current Reservations</h2>
                    <h3>{`For ${today}`}</h3>
                </div>
                <ReservationList />
                <img id="restaurant_img" src='restaurant_alt.jpg' alt="restaurant outood tables" />
            </div>
        </div>
    )};
  export default BookingForm;

  const submitAPI = function(formData) {
    return true;
  };