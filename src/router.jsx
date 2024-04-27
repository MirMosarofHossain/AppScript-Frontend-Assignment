import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Favorite from "./component/favorite/fvorite"
import MainBody from "./component/mainBody/mainBody"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<MainBody/>
            },
            {
                path:'/favorite',
                element:<Favorite/>
            }
        ]
    }
])

export default router;