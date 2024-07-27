
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Error from './pages/Error'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import UserProfile from './pages/UserProfile'
import AuthorPost from './pages/AuthorPost'
import CreatePost from './pages/CreatePost'
import CategoryPosts from './pages/CategoryPosts'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import Logout from './pages/Logout'
import Login from './pages/Login'
import Register from './pages/Register'
import Authors from './pages/Authors'

function App() {
//   const router = createBrowserRouter([{
//     path:"/",
//     element:<Layout/>,
//     errorElement:<Error/>,
// children: [
//   {index:true, element:<Home/>},
//   {path:"post/:id", element:<PostDetails/>},
//   {path:"login", element:<Login/>},
//   {path:"register", element:<Register/>},
//   {path:"profile:/id", element:<UserProfile/>},
//   {path:"authors", element:<Authors/>},
//   {path:"create", element:<CreatePost/>},
//   {path:"post/categories/:category", element:<CategoryPosts/>},
//   {path:"post/users/:id", element:<AuthorPost/>},
//   {path:"mypost/:id", element:<Dashboard/>},
//   {path:"posts/:id/edit", element:<EditPost/>},
//   {path:"logout", element:<Logout/>},
//   {path:"", element:<Dashboard/>},
// ]
//   }])
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/post/:id" component={PostDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </>
  )
}

export default App
