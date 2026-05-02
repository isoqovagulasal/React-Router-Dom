import React from "react"
import '../src/index.css'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./components/posts/Posts"
import HomeLayout from "./pages/HomeLayout"
import AboutUs from "./components/about-us/AboutUs"
import Login from "./components/login/Login"
import End from "./components/end/End"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Posts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<End />} />
      </Route>

    </Routes>
  )
}

export default App

