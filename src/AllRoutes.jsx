import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import User from "./components/User";


const AllRoutes = [
    {
        id: 'Home',
        path: '/',
        element: <Home />
    },
    {
        id: 'About',
        path: '/about',
        element: <About />
    },
    {
        id: 'Contact',
        path: '/contact',
        element: <Contact />
    },
    {
        id: '',
        path: '/user/:userId',
        element: <User />
    },

];

export default AllRoutes