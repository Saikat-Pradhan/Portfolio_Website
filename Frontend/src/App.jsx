import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './pages/Home'
import MainNavigation from './components/MainNavigation'
import About from './pages/About'
import Contact from './pages/Contact'
import DataAnalyticsProjects from './pages/DataAnalyticsProjects'
import Hiring from './pages/Hiring'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import WebDevelopmentProjects from './pages/WebDevelopmentProjects'
import Certificates from './pages/Certificates'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<HomePage/>},
    {path:"/About",element:<About/>},
    {path:"/Contact",element:<Contact/>},
    {path:"/DataAnalyticsProjects", element:<DataAnalyticsProjects/>},
    {path:"/Hiring", element:<Hiring/>},
    {path:"/Projects", element:<Projects/>},
    {path:"/Resume", element:<Resume/>},
    {path:"/WebDevelopmentProjects", element:<WebDevelopmentProjects/>},
    {path:"/Certificates", element:<Certificates/>}
  ]}
])

export default function App() {
  return (
   <>
    <ToastContainer position='top-center' autoClose={2000}/>
    <RouterProvider router={router}></RouterProvider>
   </>
  )
}
