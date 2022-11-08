import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminNews from "./pages/adminNews";
import FormatPage from "./pages/adminNews/formatPage";
import AdminPages from "./pages/adminPages";
import MainPage from "./pages/adminPages/mainPage";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signIn";
import AuthProvider from "./contexts/auth";
import PrivateRouter from "./routes/privateRouter";


function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRouter />}>
              <Route path="/" element={<Dashboard />} exact />
              <Route path="adminPages">
                <Route index element={<AdminPages />} />
                <Route path="main" element={<MainPage />} />
              </Route>
              <Route path="adminNews">
                <Route index element={<AdminNews />} />
                <Route path="format" element={<FormatPage />} />
              </Route>
            </Route>
            <Route path="sign-in" element={<SignIn />} />
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
