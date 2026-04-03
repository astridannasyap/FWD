import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages"
import Books from "./pages/books"
import TeamPage from "./pages/team"
import Contacts from "./pages/contact"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
