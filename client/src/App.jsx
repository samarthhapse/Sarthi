import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/context/theme";
import ExpertForget from "./components/auth/expert/ExpertForget";
// import Navbar from './components/Basic/Navbar'
import ExpertLogin from "./components/auth/expert/ExpertLogin";
import ExpertSignup from "./components/auth/expert/ExpertSignup";
import StudentForget from "./components/auth/student/StudentForget";
import StudentLogin from "./components/auth/student/StudentLogin";
import StudentSignup from "./components/auth/student/StudentSignup";
import StudentHome from "./components/home/StudentHome";
import ExpertHome from "./components/home/ExpertHome";
import Landing from "./components/auth/Landing";
import HomePage from "./components/Landing/HomePage";
import OtpVerifyStudent from "./components/auth/student/OtpVerify-student";
import OtpVerifyExpert from "./components/auth/expert/OtpVerify-expert";
import PageNotFound from "./components/Basic/PageNotFound";
import Navbar from "./components/Basic/Navbar";
import ExpertProfile from "./components/profile/ExpertProfile";
import MessageContainer from "./components/chat/MessageContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpertAuthToken, setExpertData } from "./redux/expertSlice";
import { setStudentAuthToken, setStudentData } from "./redux/studentSlice";
import Chats from "./components/chat/Chats";
import TranslateToggle from "./components/Basic/TranslateToggle"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!token || !userData) {
      return;
    }

    if (userData.type === "expert") {
      dispatch(setExpertAuthToken(token));
      dispatch(setExpertData(userData));
    } else if (userData.type === "student") {
      dispatch(setStudentAuthToken(token));
      dispatch(setStudentData(userData));
    }
  }, [dispatch]);
  // const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <TranslateToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/experthome" element={<ExpertHome />} />
          <Route path="/studentsignup" element={<StudentSignup />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/studentforget" element={<StudentForget />} />
          <Route path="/expertsignup" element={<ExpertSignup />} />
          <Route path="/expertlogin" element={<ExpertLogin />} />
          <Route path="/expertforget" element={<ExpertForget />} />
          <Route path="/otpverifystudent" element={<OtpVerifyStudent />} />
          <Route path="/otpverifyexpert" element={<OtpVerifyExpert />} />
          <Route path="/events" element={<HomePage />} />
          <Route path="/pricing" element={<HomePage />} />
          <Route path="/expert/:id" element={<ExpertProfile />} />
          <Route path="/message/:id" element={<MessageContainer />} />
          <Route path="/not-found" element={<PageNotFound />} />
          <Route path="/chats" element={<Chats />} />
          
          
          {/* <Route path="/videoroom" element={<VideoRoom />} /> */}
          
          
          
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
