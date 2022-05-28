import { Routes, Route } from 'react-router-dom';

import { CreateNote } from "../Pages/CreateNote"
import { Details } from "../Pages/Details"
import { Home } from "../Pages/Home"
import { Profile } from "../Pages/Profile"

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreateNote/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  )
}