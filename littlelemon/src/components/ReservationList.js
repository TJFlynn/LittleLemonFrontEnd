import React from "react";
import './ReservationList.css';

const reservations = [
    {
        id: 1,
        date : "7/15/2023",
        time: "12:00 PM",
    },
    {
        id: 2,
        date : "7/15/2023",
        time: "2:00 PM",
    }
];

const ReservationList = () => {
  return (
    <ul id="reservation_list">
    {reservations.map((reservation) => (
        <li key={reservation.id}>{`${reservation.date} - ${reservation.time}`}</li>
    ))}
    </ul>
  );
}

export default ReservationList;