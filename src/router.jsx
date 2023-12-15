import { createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Prints from "./pages/Prints"

const router = createBrowserRouter([

  {path:"/",
    element: <Home />    
},
  {path:"/prints",
    element:<Prints />
  },
  {path:"/info",
    element: <Info />
  }
])

export default router