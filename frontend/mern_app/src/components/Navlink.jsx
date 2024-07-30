import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
// import Login from './pages/Login'
import Register from './pages/Register'
import Authors from './pages/Authors'
import Login from './pages/Login'
import Header from './components/Header'

function Navlink() {
  return (
    <>
    {/* <Header/> */}
    
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<PostDetails />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
          <Route path="profile/:id" element={<UserProfile />} />
          <Route path="authors" element={<Authors />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="post/categories/:category" element={<CategoryPosts />} />
          <Route path="post/users/:id" element={<AuthorPost />} />
          <Route path="mypost/:id" element={<Dashboard />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    
    </>
  )
}

export default Navlink;
