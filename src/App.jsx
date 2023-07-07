import HomePage from './components/HomePage.jsx'
import {createBrowserRouter,RouterProvider,BrowserRouter} from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout.jsx'
import Viwer from './components/viwer.jsx'

function App() {
  const router=createBrowserRouter([
{
  path:"/",
  element:<RootLayout/>,
  children:[
    {
      path:"/",
      element:<HomePage/>,
    }
    ,{
      path:"/viwer",
      element:<Viwer/>,
    }
  ]
}
  ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
