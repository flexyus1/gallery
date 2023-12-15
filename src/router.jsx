import { createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Prints from "./pages/Prints"

const router = createBrowserRouter([

  {path:"/",
    element: <Home />    
},
  {path:"/prints",
    element:<Prints />
  }
])

export default router