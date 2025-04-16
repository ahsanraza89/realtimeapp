import Login from "../app/login/Login";
import Signup from "../app/signup/Signup";
import Home from "../app/home/Home";
import Contact from "../app/contact/Contact";
export const ROUTE_NAMES = {
    LOGIN : "/login" ,
    SIGNUP : "/signup" ,
    HOME : "/",
    CONTACT : "/contact",
    
}

export const PUBLIC_ROUTE = [
    {
        path : ROUTE_NAMES.LOGIN,
       element : Login
    },

    {
        path : ROUTE_NAMES.SIGNUP,
       element : Signup
    },
]


export const PRIVATE_ROUTES = [
    {
        path : ROUTE_NAMES.CONTACT,
       element : Contact,
       role: ["admin", "user"]
    },
    {
        path : ROUTE_NAMES.HOME,
       element : Home,
       role: ["admin"]
    },
]
