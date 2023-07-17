import { Outlet} from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    <div className='heading'>
    <Header />
    <Nav />
    </div>
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
};

export default Layout;