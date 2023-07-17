import './Home.css';
import {Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section>
        <article id="hero">
          <h1 className="heading_shadow">SPECIAL OFFER</h1>
          <p>
            30% Off This Weekend 
          </p>
          <Link data-testid="reserve_button" to="/Book" className='cta'>Book Now</Link>
        </article>
      </section>
      <section id="cards">
        <article className='card'>
          <h2>Our New Menu</h2>
          <img src="Grill.jpg" alt="grilled food"/>
          <div className="container">
            <p>
            Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.
            </p>
            <p>
            <Link to="/Menu">See our new menu</Link>
            </p>
          </div>
        </article>
        <article className='card'>
          <h2>Book a table</h2>
          <img src="salad.jpg" alt="salad"/>
          <p>
            Reserve your table for an Italian, Greek, and Turkish dining experience.
          </p>
          <p>
          <Link to="/Book" aria-label="On Click">Book Now</Link>
          </p>
        </article>
        <article className='card'>
          <h2>Opening Hours</h2>
          <img src="head_chef.jpg" alt="chef"/>
          <p>
            The Little Lemon Restaurant is open 7 days a week, except for public holidays. 
          </p>
          <ul>
            <li>Mon - Fri: 2pm - 10pm</li>
            <li>Sat: 2pm - 11pm</li>
            <li>Sun: 2pm - 9pm</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
export default Home;
